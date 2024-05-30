import React from "react";
import g from "../../../assets/g.png";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import "./Results.scss";
import { RxCountdownTimer } from "react-icons/rx";
import DescBox from "../DescBox/DescBox";
import Search from "./Search/Search";

export default function () {
  const data = [
    {
      siteName: "Google",
      siteLink: "https://www.google.com",
      siteTitle: "Google",
      siteImage: g,
      siteDesc:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      moreResults: [
        {
          moreResultsTitle: "Google Fonts",
          moreResultsDesc:
            "Roboto · Jacquard 12 · Danfo · Noto Sans Elymaic · Open ..",
          timer: <RxCountdownTimer />,
        },
        {
          moreResultsTitle: "API Library",
          moreResultsDesc:
            "Spend smart and procure faster via online discovery, purchasing ...",
          timer: <RxCountdownTimer />,
        },
        {
          moreResultsTitle: "Account",
          moreResultsDesc:
            "Your Google Account makes every service you use personalized to ...",
        },
        {
          moreResultsTitle: "Google Search app for Android",
          moreResultsDesc:
            "About this app. arrow_forward. The Google app keeps you in the ...",
        },
        {
          moreResultsTitle: "Images",
          moreResultsDesc:
            "Google Images. The most comprehensive image search ...",
        },
        {
          more: "More results from google.com »",
        },
      ],
    },
    {
      siteName: "About Google",
      siteLink: "https://www.about.google > intl > ALL_in",
      siteImage: g,
      siteTitle: "About Google, Our Culture & Company News",
      siteDesc:
        "Stay up to date with Google company news and products. Discover stories about our culture, philosophy, and how Google technology is impacting others.",
    },
    {
      siteName: "Google Blog",
      siteLink: "https://blog.google",
      siteImage: g,
      siteTitle: "The Keyword | Google Product and Technology News and ...",
      siteDesc:
        "Get the latest news and stories about Google products, technology and innovation on the Keyword, Google's official blog.",
    },
    {
      siteName: "Google",
      siteLink: "https://www.google.com > account > about",
      siteImage: g,
      siteTitle: "Google Account",
      siteDesc:
        "In your Google Account, you can see and manage your info, activity, security options, and privacy preferences to make Google work better for you.",
    },
    {
      siteName: "Google Cloud",
      siteLink: "https://cloud.google.com",
      siteImage: g,
      siteTitle: "Google Cloud: Cloud Computing Services",
      siteDesc:
        "Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.",
    },
    {
      siteName: "Wikipedia",
      siteLink: "https://en.wikipedia.org > wiki > google",
      siteImage: g,
      siteTitle: "Google",
      siteDesc:
        "Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, ...",
      links:
        "Google Search · Google Pixel · Google (disambiguation) · Google DeepMind",
    },
    {
      siteName: "Google Trends",
      siteLink: "https://trends.google.com > trends",
      siteImage: g,
      siteTitle: "Google Trends",
      siteDesc:
        "See how Google Trends is being used across the world, by newsrooms, charities, and more. Trends Time Capsule. What was trending in your special year?",
    },
    {
      siteName: "X (Twitter)",
      siteLink: "https://twitter.com/google",
      siteImage: g,
      siteTitle: "Google (@Google) · X",
      siteDescBox: [
        {
          siteDescBoxText:
            "Discover how Lens in the Google app can help you explore the world around you. Use your phone's camera to search what you see in an entirely new way.",
          siteDescBoxImage:
            "data:image/jpeg;base64,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",
          siteDescBoxTime: "9 hours ago",
        },
        {
          siteDescBoxText:
            "Discover how Lens in the Google app can help you explore the world around you. Use your phone's camera to search what you see in an entirely new way.",
          siteDescBoxTime: "12 hours ago",
        },
        {
          siteDescBoxText:
            "Discover how Lens in the Google app can help you explore the world around you. Use your phone's camera to search what you see in an entirely new way.",
          siteDescBoxImage:
            "data:image/jpeg;base64,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",
          siteDescBoxTime: "1 Day ago",
        },
      ],
    },
    {
      siteName: "Google",
      siteLink: "https://marketingplatform.google.com > about > analytics",
      siteImage: g,
      siteTitle: "Analytics Tools & Solutions for Your Business",
      siteDesc:
        "Free and easy-to-use solutions for businesses of every size. ... A single platform that integrates your advertising and analytics, so you can act on customer ...",
    },
    {
      siteName: "Google Images",
      siteLink: "https://images.google.com",
      siteImage: g,
      siteTitle: "Google",
      siteDesc:
        "Google Images. The most comprehensive image search on the web.",
    },
    {
      siteName: "Google",
      siteLink: "https://search.google.com > about",
      siteImage: g,
      siteTitle: "Google Search Console Tools",
      siteDesc:
        "Search Console tools and reports help you measure your site's Search traffic and performance, fix issues, and make your site shine in Google Search results.",
    },
    {
      siteName: "Google Play",
      siteLink: "https://pay.google.com > intl > about",
      siteImage: g,
      siteTitle: "Money made simple, by Google",
      siteDesc:
        "Built for India with all the features and rewards you love, plus much more. Google Pay is the simplest way to send money home to your family, recharge your ...",
    },
    {
      relatedSearch: [
        {
          search: "www.google search web",
        },
        {
          search: "google sign in",
        },
        {
          search: "google account",
        },
        {
          search: "google play",
        },
        {
          search: "google mail",
        },
        {
          search: "google chrome",
        },
        {
          search: "google map",
        },
        {
          search: "google history",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((val, i) => {
        return (
          <>
            <div className="result" key={i}>
              <div className="result-title">
                {val.siteImage && (
                  <div className="img-div">
                    <img src={val.siteImage} alt="" />
                  </div>
                )}
                <div className="site-name">
                  <p>{val.siteName}</p>
                  {val.siteLink && (
                    <p>
                      {val.siteLink}
                      <PiDotsThreeOutlineVerticalFill className="threeDot" />
                    </p>
                  )}
                </div>
              </div>

              <div className="result-desc">
                <h2 className="result-desc-title">{val.siteTitle}</h2>
                {val.siteDescBox && (
                  <div className="desc-row-container">
                    <div className="row">
                      {" "}
                      {val.siteDescBox.map((desc, index) => {
                        return (
                          <DescBox
                            key={index}
                            siteDescBoxText={desc.siteDescBoxText}
                            siteDescBoxImage={desc.siteDescBoxImage}
                            siteDescBoxTime={desc.siteDescBoxTime}
                          />
                        );
                      })}{" "}
                    </div>
                  </div>
                )}
                <p className="result-desc-desc">{val.siteDesc}</p>
                {val.links && <p className="links">{val.links}</p>}
              </div>

              {val.moreResults ? (
                <>
                  {val.moreResults.map((result, index) => {
                    return (
                      <div className="moreResults" key={index}>
                        <div>
                          <h2 className="moreResultTitle">
                            {result.moreResultsTitle}
                          </h2>
                          <p className="moreResultDesc">
                            {result.moreResultsDesc}
                          </p>

                          {result.more ? (
                            <p className="more">{result.more}</p>
                          ) : (
                            <></>
                          )}
                        </div>
                        {result.timer ? (
                          <div className="timer">{result.timer} </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
            {val.relatedSearch && (
              <div className="relatedSearch">
                <div className="searchTitle">
                  <h1>Related searches</h1>{" "}
                  <PiDotsThreeOutlineVerticalFill className="threeDot" />
                </div>
                <div className="searchesGrid">
                  {val.relatedSearch.map((item, i) => {
                    return <Search key={i} searchItem={item.search} />;
                  })}
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
