import React, { useEffect, useState } from 'react';
import Post from '../../components/posts/Post';
import "./Instagram.css";
import {db, auth} from "../../Firebase/firebase"
import { Button, Input, makeStyles, Modal } from '@material-ui/core';
import ImageUpload from '../../components/imageUpload/ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import Insta__Demo from '../../lib/Insta__Demo';



function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));





const Instagram = () => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [openSignin, setOpenSignin] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(null);


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
           if(authUser){
               console.log(authUser);
               setUser(authUser);
           }else{
               setUser(null)
           }
        })

        return () => {
            unsubscribe()
        }
    }, [user, username])


    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()}) ))
        })
    }, [])


    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
             return authUser.user.updateProfile({
                  displayName: username
              })
          })
           .catch((err) => alert(err.message))

           setOpen(false);
           setEmail('');
           setPassword('');
           setUsername('');
    }


    const signIn = (e) => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email, password)
          .catch(err => alert(err.message))

        setOpenSignin(false);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="instagram_page">
            <Modal
              open={open}
              onClose={() => setOpen(false)}
            >
               <div style={modalStyle} className={classes.paper} >
                  <form className="insta__signUp">
                    <center>
                     <img
                       className="insta__headerImage"
                       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                       alt="headerImage"
                     />
                   </center>

                   <Input
                     placeholder="username"
                     type="text"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    />

                   <Input
                     placeholder="email"
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />

                   <Input
                     placeholder="password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" onClick={signUp}>Sign Up</Button>
                  </form>
               </div>
            </Modal>



            <Modal
              open={openSignin}
              onClose={() => setOpenSignin(false)}
            >
               <div style={modalStyle} className={classes.paper} >
                  <form className="insta__signUp">
                    <center>
                     <img
                       className="insta__headerImage"
                       src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                       alt="headerImage"
                     />
                   </center>
                   <Input
                     placeholder="email"
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />

                   <Input
                     placeholder="password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" onClick={signIn}>Sign In</Button>
                  </form>
               </div>
            </Modal>



            <div className="insta__header">
                <img
                    className="insta__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="headerImage"
                />

                {
                  user ? (
                      <Button onClick={() => auth.signOut()}>Logout</Button>) : (
                    <div className="insta__loginContainer">
                      <Button onClick={() => setOpenSignin(true)}>Sign In</Button>
                      <Button onClick={() => setOpen(true)}>Sign up</Button>
                    </div>
                )}


            </div>

            <div className="insta__post">
              <div className="insta__postLeft">
                {
                  posts.map(({id, post}) => (
                      <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                  ))
                }
              </div>

              <div className="insta__postRight">
                  <Insta__Demo /> {/* i do this because i dont have instagram embed */} 
              </div>
            </div>

            
            {
              user?.displayName ? (<ImageUpload username={user.displayName} />) : ( <h3 style={{textAlign: "center"}}>Sorry you need to login to upload!</h3> )
            }
        </div>
    )
};


export default Instagram