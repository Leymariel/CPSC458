import Tweet from "./components/tweet";
import "./styles.css";

export default function App() {
  const tweets = [
    {
      imgSource: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg",
      imgAlt: "Lady Gaga in a large pink dress",
      tweetText: "No sleep, bus, club, another club, another club, another club, plane, next place, no sleep, another club, another club…",
      profileName: "Lady Gaga",
      username: "@ladygaga",
      date: "31 May 2017",
      isVerified: true
    },
    {
      imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
      imgAlt: "SpaceX launch",
      tweetText: "Witnessed the historic SpaceX launch. The view from here is simply out of this world! 🚀 #SpaceX",
      profileName: "Elon Musk",
      username: "@elonmusk",
      date: "30 April 2022",
      isVerified: true
    },
    {
      imgSource: "https://mst60.files.wordpress.com/2010/09/t1.jpg",
      imgAlt: "Cute kitten",
      tweetText: "Adopting a kitten has been one of the best decisions of my life! Meet Luna 🐱 #kittenlove",
      profileName: "Jane Doe",
      username: "@janedoe",
      date: "15 March 2024",
      isVerified: false
    },
    {
      imgSource: "https://t4.ftcdn.net/jpg/04/33/17/97/360_F_433179700_htTCGwPpXrTwwuLImhJaX4puNBhs44Vc.jpg",
      imgAlt: "Book stack",
      tweetText: "Just hit my goal of reading 50 books this year! Here's to 50 more 📚 #bookworm",
      profileName: "John Smith",
      username: "@johnsmith",
      date: "22 July 2023",
      isVerified: false
    }
    // Add more tweet objects here as needed
  ];

  return (
    <div className="tweets-column">
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          imgSource={tweet.imgSource}
          imgAlt={tweet.imgAlt}
          tweetText={tweet.tweetText}
          profileName={tweet.profileName}
          username={tweet.username}
          date={tweet.date}
          isVerified={tweet.isVerified}
        />
      ))}
    </div>
  );
}
