import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Avatar from '../../../components/Avatar/Avatar';
import { IS_LOGGED_IN } from '../../../queries/User';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Button from '../../../components/Button/Button';
import { IconButton } from '@mui/material';
import "./NewTweet.css"
import TweetFile from '../../../components/TweetFile/TweetFile';
import { NEW_TWEET } from '../../../queries/Tweet';
import { FEED } from '../../../queries/Others';
import { toast } from 'react-toastify';
import { uploadImage } from '../../../utils';

const NewTweet = (props) => {
    const [tweet, setTweet] = useState("");
    const [tweetFiles, setTweetFiles] = useState([]);

    const handleTweet= (e) => {
        setTweet(e.target.value);
    }

    const handleTweetFiles = async (e) => {
        const imageUrl = await uploadImage(e.target.files[0]);
        setTweetFiles([...tweetFiles, imageUrl]);
    };

    const [newTweetMutation, { loading }] = useMutation(NEW_TWEET, {
        refetchQueries: [{ query: FEED }]
    });

    const handleNewTweet = async (e) => {
        e.preventDefault();

        if(!tweet) return toast("Write Something");

        const tags = tweet.split(" ").filter((str) => str.startsWith("#"));

        try {
            await newTweetMutation({
                variables: {
                    text: tweet,
                    tags,
                    files: tweetFiles
                }
            });

            toast("The tweet has been uploaded");
        } catch (err) {
            console.log(err.message);
        }

        setTweet("");
        setTweetFiles([]);
    };

    const {
        data: { User }
      } = useQuery(IS_LOGGED_IN);

    return (
        <div className="new-tweet">
            <Avatar src={User.avatar} alt="avatar" />
            <form onSubmit={handleNewTweet}>
                <div className="new-tweet-main">
                    <TextareaAutosize 
                        cols="48"
                        maxRows="3"
                        placeholder="What's happening?"
                        type="text"
                        className="textarea"
                        value={tweet}
                        onChange={handleTweet} />

                    {tweetFiles[0] && (
                        <TweetFile src={tweetFiles[0]} alt="preview" />
                    )}

                    <div className="new-tweet-action">
                        <input id="contained-button-file" accept="image/*" type="file" onChange={handleTweetFiles} style={{ display: 'none' }}/>
                        <label htmlFor="contained-button-file">
                            <IconButton aria-label="upload media" component="span">
                                <InsertPhotoIcon />
                            </IconButton>
                        </label>
                        <Button label="Tweet" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewTweet;