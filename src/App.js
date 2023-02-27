import React, { useEffect, useState } from "react";
import TextFilter from "./components/header/TextFilter";
import Logo from "./components/images/ylytic.png";

import "./App.css";
import Filter from "./components/header/Filter";
import Data from "./components/data/Data";
import Pagination from "./components/header/Pagination";
import Page from './components/header/Page';



function App() {
  // const [filterDate, setFilterDate] = useState();
  // const [getDay, setGetDay] = useState();
  const [getDateFilter, setGetDateFilter] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [itemDataDisplay, setItemDataDisplay] = useState(true);
  const [filterBox, setFilterBox] = useState(false);
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState(true);
  const [textList, setTextList] = useState([]);
  const [data, setData] = useState([]);
  const [store, setStore] = useState();
  const [dateFilter, setDateFilter] = useState([]);
  
 


    useEffect(() => {

    const storeData = [{"at":"Mon, 16 Jan 2023 22:34:06 GMT","author":"Channel Makers","like":58,"reply":50,"text":"How much are you hoping to make on your channel by the end of this year? I'm rooting for you!"},{"at":"Tue, 31 Jan 2023 14:22:58 GMT","author":"Beauttifful Nature","like":0,"reply":0,"text":"What does returning viewers and unique viewers mean? And how much is a good score?"},{"at":"Tue, 31 Jan 2023 13:18:57 GMT","author":"wendy belessis","like":0,"reply":0,"text":"Making money with real data. I\u2019m a storytelling channel and it\u2019s frustrating to see the top YT income earners since a lot doesn\u2019t seem to apply. Thanks for all the great info - your vids are upbeat and chockful of helpful advice"},{"at":"Mon, 30 Jan 2023 13:16:37 GMT","author":"Guitar. For Beginners. With Dave","like":0,"reply":0,"text":"Thanks Nate, a valuable lesson.  I'd love to see you make the video about earning $5k+.  Thanks again"},{"at":"Mon, 30 Jan 2023 02:51:59 GMT","author":"Dan noringer","like":0,"reply":0,"text":"The first of the two options of video ideas that you are asking about would be most useful (after you answer the question I asked below)"},{"at":"Mon, 30 Jan 2023 02:46:46 GMT","author":"Dan noringer","like":0,"reply":0,"text":"I already booped your thumb."},{"at":"Mon, 30 Jan 2023 02:45:14 GMT","author":"Dan noringer","like":0,"reply":0,"text":"I'd like to be monitized this year, having not been thus far.  I'm got one video with 1100 views per day steady, now at 40,000 views.  Should I release another video ?  or should I wait until the 1100 views drops down to say, 100 views per day ?  regards, Dan (PS LOVE YOUR CONTENT)"},{"at":"Sat, 28 Jan 2023 14:18:43 GMT","author":"Krishna Chaitanya","like":0,"reply":0,"text":"If you\u2019re reading this, your YouTube channel will grow, keep grinding and stay focused!"},{"at":"Sat, 28 Jan 2023 13:48:34 GMT","author":"LuckyStone888","like":0,"reply":0,"text":"10 days and I just saw this on my feed. Youtube has been inundating me with videos that are several years old.  Sure I find them interesting, but it makes it challenging to see new content from channels like yours.  \nIt would be better to see $5K revenue from channels over X subscribers or $5K revenue from channels only with X subscribers.\nI would love to join your classes but I don't think I have a niche that is valuable and I need to evolve my niche to be more valuable to subscribers. That is my goal for 2023 to evolve my niche into something of more value."},{"at":"Fri, 27 Jan 2023 22:44:02 GMT","author":"Matt Robb Tech","like":0,"reply":0,"text":"1:37 The new YouTube monitization for shorts may help this creator make more money on the platform. Will you be doing a video on this? Im excited as Ive only made a couple of shorts and barely made $0.10 on both combined"},{"at":"Thu, 26 Jan 2023 17:27:15 GMT","author":"Body Illumination with Rebekah","like":0,"reply":0,"text":"You crack me up Nate!  BTW- I bought the mic you recommended and I LOVE IT!!!!!! Wahoo.  I recorded one of my yoga videos with it and the sound was SOOOOO much better.  Thank you."},{"at":"Wed, 25 Jan 2023 23:59:38 GMT","author":"Did you know?","like":0,"reply":0,"text":"Thank you for this info , hoping to be monetized soon ! hopefully"},{"at":"Tue, 24 Jan 2023 17:55:36 GMT","author":"Louizon","like":1,"reply":0,"text":"This that I don't understand you, you said that Ride at motion Channel have more that 300 subscribe! And you say that he still grows is income monthly. \n\nSo i'am so confused youtube monatize term say to get monatize you have to proof 1000 subscribe and 4000 watch hours! Right!\n\nHow he do that? youtube just privileges him? I'am confused now I don't understand any more \ud83d\ude15"},{"at":"Tue, 24 Jan 2023 13:31:51 GMT","author":"Styling with Deon","like":0,"reply":0,"text":"How to make 5000 monthly from my channel?"},{"at":"Tue, 24 Jan 2023 13:17:41 GMT","author":"Easy Groophz","like":0,"reply":0,"text":"Good point. When you have a look at the history of chatbots ChatGPT is a bit smarter, but still too generic and has all the problems in it that the internet has (hate, bias, etc) because its database is the internet. There has to be invested a lot more time to get a tool that is really useful. If you are not firm in a certain niche it can give worth hints but if you are an expert in a niche or topic it is useless. And the problem with \u201eintelligence\u201c in A.I., btw a marketing term, is that the technology behind is the simplest form of a brain simulation. It is not able to be creative and create something new to a certain problem. It is more of an intelligent pattern recognizer in a big amount of data. Helpful and faster than a human but not intelligent in the end. No system that can we trust in critical situations at the moment. The question is if we can develop an artifical intelligence without understanding how the human brain creates intelligence. Or when will we understand the human brain to start with a corresponding simulation ;-)."},{"at":"Tue, 24 Jan 2023 00:57:32 GMT","author":"2nerdsonacouch","like":0,"reply":0,"text":"We aren't entirely sure when but supposedly youtube is rolling out something that even if we have copyrighted music in our videos that we can license/share revenue on those videos? Any idea if that would be retroactive for videos that have already been posted?  Thank you :)"},{"at":"Mon, 23 Jan 2023 23:44:12 GMT","author":"OutThereSomeWhere","like":1,"reply":0,"text":"Hey Nate, great video as always\ud83d\ude03. Ive just started Project24. Im really enjoying the system structure, simply brilliant! I've been struggling to clearly define which approach I should take to monitise my channel. So would be keen on understanding \"How YouTubers are making money (with  real data)\". I've been working on my channel for over 12 months 650 subs, 3200 Watch Hrs. Hoping to start gaining Ad Revenue before the end of the year. But I know the real earning is outside of Ad Revenue."},{"at":"Mon, 23 Jan 2023 11:35:01 GMT","author":"Yoga with Krista I Ol\u00f3tita","like":0,"reply":0,"text":"Both topics would be amazing! \ud83d\ude0a"},{"at":"Sun, 22 Jan 2023 19:31:13 GMT","author":"Spanish School for Kids","like":0,"reply":0,"text":"Option A but I'd love to see a video for both topics :)"},{"at":"Sun, 22 Jan 2023 16:21:59 GMT","author":"Dodge County Fairgrounds","like":0,"reply":0,"text":"Can you give more information on using channel memberships?"},{"at":"Sun, 22 Jan 2023 06:18:38 GMT","author":"Cyber Quince","like":0,"reply":1,"text":"What do you think about the Shorts strategy? I've been uploading some clips that performed well on IG and TikTok but YT seems to be a completely different algorithm"},{"at":"Sun, 22 Jan 2023 05:28:20 GMT","author":"The Art Mentor","like":0,"reply":1,"text":"Howdy Nate! One income source not mentioned was selling your own coaching program. I\u2019m happy to talk to you about it more if you\u2019d like, but I make a good income with a rather small subscriber base. It\u2019s been quite profitable and growing every month. Thanks for the great advice for us!"},{"at":"Sun, 22 Jan 2023 02:52:36 GMT","author":"NICOLETIANA","like":0,"reply":1,"text":"I'm hustling my butt off! I'm currently at 6,600. I'm manifesting 10k within the next few months!"},{"at":"Sat, 21 Jan 2023 23:51:15 GMT","author":"sugaslate14","like":0,"reply":1,"text":"Also, I\u2019d like to see the $5k a month video. And maybe a breakdown of how the pay works between ad revenue and CPM"},{"at":"Sat, 21 Jan 2023 23:44:58 GMT","author":"ApneaPlanet Freitauchen","like":0,"reply":1,"text":"I am strongly interested in the first video topic - especially to see reality and examples of smaller channels"},{"at":"Sat, 21 Jan 2023 23:43:08 GMT","author":"sugaslate14","like":0,"reply":0,"text":"I\u2019ve started a new cooking channel. I don\u2019t expect to get rich from it but man. If I could quit my 9-5\u2026. That\u2019s the goal. If you do this type of content again how can I submit my channel for you to review?"},{"at":"Sat, 21 Jan 2023 16:34:55 GMT","author":"Claim Your Day","like":0,"reply":1,"text":"Ours isn't monetized...We just started our channel last Month. I would love any feedback!\u2764\ufe0f"},{"at":"Sat, 21 Jan 2023 08:05:45 GMT","author":"RudyLuttrell","like":0,"reply":1,"text":"I enjoy your videos, they help."},{"at":"Sat, 21 Jan 2023 06:21:37 GMT","author":"digivagrant","like":0,"reply":1,"text":"Honestly, I'm more interest in making 5000/month in Youtube. I know the advise don't put all eggs in one basket but I only have one basket it's kinda the only one I can use right now..."},{"at":"Sat, 21 Jan 2023 02:01:36 GMT","author":"KissMe","like":1,"reply":1,"text":"Who uses patron????? Curious how it\u2019s working out for you."},{"at":"Sat, 21 Jan 2023 01:55:35 GMT","author":"KissMe","like":0,"reply":1,"text":"You rock- haha your laugh Nate is great there! Do my channel next \ud83c\udf89"},{"at":"Sat, 21 Jan 2023 00:53:48 GMT","author":"Mosi","like":0,"reply":1,"text":"Grow the beard Nate! Commit, dammit! \ud83d\ude05"},{"at":"Fri, 20 Jan 2023 23:36:17 GMT","author":"TheBlazerBeam","like":0,"reply":1,"text":"I think we see the \u201chow to make $X per month on YouTube\u201d quite a bit. That having been said, I think seeing the real data would be more beneficial."},{"at":"Fri, 20 Jan 2023 22:59:09 GMT","author":"Dylan Goller","like":0,"reply":0,"text":"How to make more than 5K"},{"at":"Fri, 20 Jan 2023 18:11:34 GMT","author":"Furniture Flipping Rush","like":0,"reply":1,"text":"Great tips \ud83d\udca5 Never really realized how adding your face makes content more memorable. Makes sense yes . Learn something every day. \ud83d\ude4c\ud83c\udffb"},{"at":"Fri, 20 Jan 2023 15:09:23 GMT","author":"Musashi 33","like":0,"reply":1,"text":"Do both, only right answer ;)"},{"at":"Fri, 20 Jan 2023 11:34:28 GMT","author":"*How To* Channel","like":0,"reply":1,"text":"Option A Nate, give us the real data so we can see what work's! And thx for the content, THE BEST!!!"},{"at":"Fri, 20 Jan 2023 11:22:28 GMT","author":"Celebrity updates 254 AFRICA","like":0,"reply":1,"text":"Great tips \u2764\ufe0f"},{"at":"Fri, 20 Jan 2023 05:42:33 GMT","author":"Alice & Pearl Jam","like":0,"reply":1,"text":"I would love to know how to make 5k per month! Give it to me Nate!"},{"at":"Fri, 20 Jan 2023 02:53:47 GMT","author":"Heritage Play","like":0,"reply":1,"text":"Hey Nate! I've been watching your videos for a few weeks. I just started uploading videos to YouTube about a month ago and your information has been incredibly helpful. I'm in the gaming niche and currently only have 25 subscribers. When I only had a few videos on the channel I believe I made a mistake and did an order on Fiverr to promote one of my videos. As I now know is pretty common, I got a few views and they only stayed for a few seconds, messing with the retention. I saw in one of your videos that you don't get to review a channel with under 100 subs often and I thought I'd just mention that I'm perfectly fine with you tearing into my channel with some feedback. My more recent thumbnails are much better than my older ones but I struggle with getting any views. My shorts do ok, getting about 1000-2000 views but my regular videos stay single digit views with the exception of a couple. Any advice is welcome. Thank you in advance."},{"at":"Thu, 19 Jan 2023 16:37:59 GMT","author":"Dominikavnalikes","like":0,"reply":1,"text":"Would love to know how to grow a weightloss/fitness channel. I am creating only shorts at the moment, don\u2019t have the courage to create full videos at the moment."},{"at":"Thu, 19 Jan 2023 13:20:18 GMT","author":"Pixelated Elexer","like":0,"reply":0,"text":"I'm new to the channel and to youtube as a creator as a whole. But as I take my time to grow an audience I am curious on how exactly is it that creators get brand deals or figure out how to market themselves to brands in order to work together? I like the way you explain these type of questions and I would like to hear your feedback."},{"at":"Thu, 19 Jan 2023 12:11:50 GMT","author":"Sara Armellin","like":0,"reply":0,"text":"Both of your videos ideas are great! Something I struggle to find on YT are video that talks about sponsorships! I personally would like to have advices about how to deal with them, general amounts of money to expect and to ask, which differents types of sponsorships exists etc! This would be a great topic to cover! \ud83e\udd29 thank you for all your videos!"},{"at":"Thu, 19 Jan 2023 10:26:59 GMT","author":"Kasper Garam","like":0,"reply":1,"text":"I would love to get monetized, but I'm struggling with going up in both views and subscribers. There's the occasional one or two subscribers coming to my channel and some videos do get several hundreds of views. I'm just waiting for that one day when everything changes.. Until then, I'll keep on watching your content. And probably after that too. Because Nate, YOU ROCK!"},{"at":"Thu, 19 Jan 2023 09:59:49 GMT","author":"Fredrick Carlos","like":4,"reply":3,"text":"*I think every investor goes broke during a bear market and other major crashes but wrong!some make millions,i also thought everybody went out of business during the great depression but they didn't.Some went into Businesses, there's always depression/recession for some people and there's always profit to be made for others, It's all about perspective and right trading plan*"},{"at":"Thu, 19 Jan 2023 09:59:46 GMT","author":"Fredrick Carlos","like":1,"reply":1,"text":"*Because of the economic crisis that always comes up the best thing to be on every wise individual\u2019s mind or list is to invest in different streams of income that\u2019s not depending on the government to generate funds.*"},{"at":"Thu, 19 Jan 2023 09:09:14 GMT","author":"Five Star","like":1,"reply":0,"text":"Geology dude is a rock star\n\nYes I said it"},{"at":"Thu, 19 Jan 2023 05:59:47 GMT","author":"Honeybees Relaxation","like":0,"reply":1,"text":"I never hear a lot about relaxing/meditation music channels! I\u2019ve been working on my channel since last June slowly growing! Is these type of channels hard to monetize??"},{"at":"Thu, 19 Jan 2023 04:47:35 GMT","author":"HGNext ","like":1,"reply":1,"text":"Whats up Nate! Your channel has been so helpful. I recently started my YT channel and it\u2019s going well so far. Only thing is that I\u2019m not getting the views I\u2019d hope for. I feel like my content is too well crafted to not be seen by more people. Wondering if you can give me some advice?"},{"at":"Thu, 19 Jan 2023 04:04:23 GMT","author":"it's all about the cocktail","like":0,"reply":1,"text":"Thank you, I SO needed this video."},{"at":"Thu, 19 Jan 2023 03:41:57 GMT","author":"Tyrell Hargrove","like":0,"reply":1,"text":"Awesome video and also I'm starting my gaming channel"},{"at":"Wed, 18 Jan 2023 23:51:06 GMT","author":"Daniel Goldhorn","like":0,"reply":0,"text":"I'd vouch for the first future video, seeing that kind of hard data would be really helpful. Thank you for your great advice!"},{"at":"Wed, 18 Jan 2023 22:34:10 GMT","author":"Coolabah Woodworking","like":0,"reply":0,"text":"Young channel hope I get there soon! Project24 helps me a lot"},{"at":"Wed, 18 Jan 2023 19:55:04 GMT","author":"Fox-Mann-Fam","like":0,"reply":2,"text":"Most helpful for a smaller/newer channels would be the \"How YouTubers are Making Money (with data).\"  I'd guess a lot of us are so far from the state of the highest income earners that it's not going to be applicable now."},{"at":"Wed, 18 Jan 2023 18:51:13 GMT","author":"Everyday Carnivore","like":0,"reply":1,"text":"$5k/month video would be \ud83d\udc4c"},{"at":"Wed, 18 Jan 2023 17:03:28 GMT","author":"Brick House Builds","like":0,"reply":1,"text":"Option A please. There are a million click bait videos out there that say \"make huge money by\" yadayadayada. We appreciate your real data"},{"at":"Wed, 18 Jan 2023 15:30:32 GMT","author":"Online Entrepreneurs","like":0,"reply":1,"text":"Second title, please \ud83d\ude0a"},{"at":"Wed, 18 Jan 2023 15:02:55 GMT","author":"Biscuit Tree Woodworks","like":0,"reply":1,"text":"As someone in the early stages of monetization, I'm more interested in what monetization areas to start using and focus on growing before trying to maximize profits. I just started getting ad revenue, but what would be the next logical step? Plans, merchandise, YouTube Memberships, or continue to build for more ad revenue?  In my niche, I see a lot of channels selling plans. How do I get started with that? Where do I sell the plans from? Do I need to build a website to sell from? That seems like a huge undertaking itself, not to mention learning how to make the plans themselves!"},{"at":"Wed, 18 Jan 2023 14:10:34 GMT","author":"Moscarblog","like":0,"reply":1,"text":"Bring both Videos! Please Marke one on how to get Sponsors and Brand Partners!"},{"at":"Wed, 18 Jan 2023 13:57:36 GMT","author":"Shiatsu Shane - ASMR Massage","like":0,"reply":1,"text":"Nate you know we want both right! Ps if you want some real time info on earning drop me a msg on project 24 happy to share my data with you"},{"at":"Wed, 18 Jan 2023 13:54:04 GMT","author":"Give It A Go Bakes","like":0,"reply":0,"text":"I think both videos would be helpful as 5k is my goal.  But I hope I can start doing anything."},{"at":"Wed, 18 Jan 2023 12:36:27 GMT","author":"\ud83d\udcb0 Make $750 Per Day","like":0,"reply":1,"text":"\"Things work out best for those who make the best of how things work out.\" _John Wooden"},{"at":"Wed, 18 Jan 2023 11:40:56 GMT","author":"Cak Tukang","like":0,"reply":1,"text":"Ikut nyimak dan belajar, sebagai pemula saya butuh banyak masukan dari para senior, semoga selalu diberi kesehatan\ud83d\udcaa"},{"at":"Wed, 18 Jan 2023 11:36:54 GMT","author":"Solution Will","like":0,"reply":1,"text":"this question is for anyone who knows the truth of the answer.\ndo text to speech types of channels monetized?"},{"at":"Wed, 18 Jan 2023 11:32:22 GMT","author":"Featherstitch House","like":0,"reply":1,"text":"I would love to see the 5K per month video. My channel is growing and making around \u00a350 per month. I do project based embroidery tutorials. It is working well to attract returning viewers. I think my content stands up well alongside other similar channels but maybe I'm biased. There are so many stand alone videos I want to make but can't find the time alongside my very demanding job as a high school teacher. I want to make Featherstitch House my full-time career but I'm struggling to make enough money to give up my teaching role. I would love to sign up to Project 24 but don't have the revenue at the moment. I've learnt so much from your videos and they have helped me to get to where I am now. I need the next steps though. It still all feels new and difficult. Thanks for all you do. \ud83d\udc4d"},{"at":"Wed, 18 Jan 2023 10:13:02 GMT","author":"Vet Nele - Cat Vet","like":0,"reply":1,"text":"I'd like the first video idea \ud83d\ude0a"},{"at":"Wed, 18 Jan 2023 10:12:39 GMT","author":"The Album Review Channel","like":0,"reply":1,"text":"Great video Nate. I would appreciate more of a \u201chow to earn \u00a35k\u201d video"},{"at":"Wed, 18 Jan 2023 09:44:34 GMT","author":"K9 concepts","like":0,"reply":1,"text":"Another vote for option A!"},{"at":"Wed, 18 Jan 2023 09:07:34 GMT","author":"Nikita Maree","like":1,"reply":1,"text":"The first one  \ud83d\udc4d\nI would love to know more about how much money different types of creators are making with how many views/  watchhours/ subscribers they have. Wether that's from add revenue or sponsored vids."},{"at":"Wed, 18 Jan 2023 09:06:04 GMT","author":"Amanda McAdam","like":0,"reply":0,"text":"How youtubers are making money with real data seems more valuable than how highest income earners are doing.  Especially since many of us don't have the staff or resources yet for high income.  But maybe you could do both to give us something to look forward too"},{"at":"Wed, 18 Jan 2023 09:05:27 GMT","author":"Paige Feldman","like":0,"reply":1,"text":"I appreciate you covering this topic with channels under 1k subscribers (like me). So much content about monetization in general starts with channels who are already part of the YouTube partner program that it makes me feel discouraged from even asking for help because if people with \u201conly\u201d 10k subscribers are on the small side, where does that leave me... This is the first video about making money from my channel that doesn\u2019t leave me feeling demoralized at the end. Thank you. To that end, I\u2019d choose video A from the choices. I don\u2019t need another aspirational video about channels who are so far above my level. I\u2019d rather real data I can learn from (even if it is from channels much bigger than mine \ud83d\ude05)."},{"at":"Wed, 18 Jan 2023 08:46:06 GMT","author":"Brett's Basement Woodshop","like":0,"reply":1,"text":"I'm going to go watch that subscribability lesson now."},{"at":"Wed, 18 Jan 2023 08:44:32 GMT","author":"Brett's Basement Woodshop","like":0,"reply":0,"text":"I'd like to see the real data on how YTers are making money."},{"at":"Wed, 18 Jan 2023 07:46:01 GMT","author":"Going solo in France","like":0,"reply":1,"text":"I would be willing to bet that new youtubers have no idea of the peaks and troughs of youtube income throughout the year. For example, My small channel earned around 450 a month last summer and only 250 as winter arrived.  Perhaps you could expand on this. Thanks Nate :-)"},{"at":"Wed, 18 Jan 2023 06:37:29 GMT","author":"Buckeye the Cat","like":0,"reply":1,"text":"Great video. I would love to see the how to make $5k a month video. Thanks. \ud83d\ude3b"},{"at":"Wed, 18 Jan 2023 06:15:11 GMT","author":"Alex Ah Sue","like":0,"reply":1,"text":"Hoping to get 1,000 subs by end of year, who else??"},{"at":"Wed, 18 Jan 2023 05:28:45 GMT","author":"The Gaming Sparrow","like":0,"reply":1,"text":"I think the \"How to make 5k/ month\" video would be great to see!!!"},{"at":"Wed, 18 Jan 2023 05:18:06 GMT","author":"Doughnut Dragon","like":0,"reply":1,"text":"If in option a you can also explain how to go about setting up these different types of revenue that would be wonderful. \nMost channels say \"do affiliate marketing\" \"make merch\"\nAnd so on but they never go into HOW to set up an online merch shop or how to become an affiliate marketer \nSo it would be nice if someone wpuld explain how to set that up and not just say to go do it like it's common knowledge how to."},{"at":"Wed, 18 Jan 2023 04:55:05 GMT","author":"Mia Van Meter","like":0,"reply":1,"text":"Real examples is my choice"},{"at":"Wed, 18 Jan 2023 04:45:09 GMT","author":"themirrorbeauty","like":0,"reply":1,"text":"Could you cover the topic on what you can do without breaking any YouTube rules to change your country for a country where you can get your channel monetised with AdSense? Besides the actual moving to another country. Do you need to get a tax number from another country? Or a bank account? Would it be a violation of the rules to change your country then?.."},{"at":"Wed, 18 Jan 2023 04:39:45 GMT","author":"GoPro Drive","like":0,"reply":1,"text":"Hi how would suggest getting  my channel monetised?Cheers. Paul."},{"at":"Wed, 18 Jan 2023 04:03:44 GMT","author":"KeSetoKaiba","like":1,"reply":1,"text":"Howdy :D Nice video timing as my channel just got accepted for YPP and monetization about yesterday. Also, 10:28 I like both video ideas, but the 1st option piques my interest more right now. :)"},{"at":"Wed, 18 Jan 2023 03:51:41 GMT","author":"SouthernWife EverydayLife","like":0,"reply":2,"text":"I wish I could figure out what I\u2019m doing wrong, I lost over $1k in two months \ud83d\ude29 Love your videos."},{"at":"Wed, 18 Jan 2023 03:41:19 GMT","author":"Cubing 4 U","like":0,"reply":2,"text":"I would like to know how to make money with affiliates when you have a very focussed niche. I don't know how well affiliates would work with this."},{"at":"Wed, 18 Jan 2023 03:36:00 GMT","author":"Evolution of Hero","like":0,"reply":1,"text":"Option A \ud83d\ude0e\ud83d\udc4c"},{"at":"Wed, 18 Jan 2023 03:32:14 GMT","author":"Adventures in TV-Land","like":0,"reply":1,"text":"The data one"},{"at":"Wed, 18 Jan 2023 03:17:55 GMT","author":"CriKer","like":0,"reply":1,"text":"What I am doing wrong with my channel?"},{"at":"Wed, 18 Jan 2023 02:51:10 GMT","author":"100% Shipper","like":3,"reply":1,"text":"I'd be down for option A. I feel I've seen a few vids on what successful YouTubers are doing but it would be great to see the in between state  too on when channels successfully introduce certain monetization strategies. I'm trying to figure out at what point to do a Patreon or maybe merch."},{"at":"Wed, 18 Jan 2023 02:06:18 GMT","author":"Kevinnn","like":0,"reply":1,"text":"Like your videos, you have caught me in then\u201dloop\u201d many times. Is there any chance you could do a video around gaming channels? It\u2019s a saturated market that I feel like your knowledge you enlighten us into how to break into them."},{"at":"Wed, 18 Jan 2023 01:57:59 GMT","author":"Mindy Bradford","like":0,"reply":0,"text":"I like the second! Keepin it real, it doesn\u2019t really matter cause I\u2019m gonna watch any video put out."},{"at":"Wed, 18 Jan 2023 00:56:26 GMT","author":"Anthony English","like":0,"reply":4,"text":"I clicked Like before you asked for a boop. It was that \"and that memes / that means\" pun which got me to like."},{"at":"Wed, 18 Jan 2023 00:55:12 GMT","author":"Whatever Unboxing","like":0,"reply":1,"text":"Do you have any guide on uploading, like which options to select when they ask about what type of content is uploaded, like does it have violence and stuff."},{"at":"Wed, 18 Jan 2023 00:35:20 GMT","author":"GoldPanDann","like":0,"reply":1,"text":"I'd say how to earn $4k+ a month as a content creator. (Cross posting content on multiple platforms, ad revenue, sponsorships, brand deals, products, courses, in person talks/presentations, etc)"},{"at":"Wed, 18 Jan 2023 00:17:09 GMT","author":"TRI to the Next Level","like":0,"reply":1,"text":"How YouTubers are making money with real data!"},{"at":"Wed, 18 Jan 2023 00:16:35 GMT","author":"Kat at Large","like":0,"reply":0,"text":"Thank you for the mention; I think I did an actual double-take toward my laptop when that happened!  I'm especially flattered that you chose what I wrote in the email as an outlet for your boop the like button bit in this video!  Alas it won't allow me to do so, but for that I'd boop it twice if I could!"},{"at":"Wed, 18 Jan 2023 00:06:17 GMT","author":"Tea Formula","like":1,"reply":0,"text":"Is there an independent company that do merchandise on a no purchase, no fee basic like Patreon?"},{"at":"Tue, 17 Jan 2023 23:57:58 GMT","author":"Anne Marino","like":0,"reply":2,"text":"In order to sell merch, do I need a specific number of subscribers?"},{"at":"Tue, 17 Jan 2023 23:48:04 GMT","author":"Triston Webb","like":0,"reply":1,"text":"Either or works great. But. It\u2019d be cool for everyone to see examples of money made at all/ multiple levels of size( 5K subs. 10k, 20,50 etc..)"},{"at":"Tue, 17 Jan 2023 23:15:56 GMT","author":"SIBIRIAK","like":0,"reply":1,"text":"here is a topic. how to make people to buy alternative content. I mean it should be covered in Nate style. We all understand basics like \"make a teaser and sell a whole video\" or do subscriptions on Patreon. But how to make people want to go through with you."},{"at":"Tue, 17 Jan 2023 23:11:26 GMT","author":"Guy in a Coffee Cup","like":0,"reply":1,"text":"Thanks for reviewing my channel!\nI only started my channel as a hobby and I don't put my face on my videos 'coz I'm shy & not good in english... Pewdiepie said \"just have Fun and enjoy the process, so if you failed, at least you had fun doing it\". now I'm starting to show my face and talk to put some \"personal touch\" on each of my videos."}];
    setItems(storeData);
    setItemData(storeData);
  
  }, []);
  
    const paginationHandler = (d) => {

      setItemDataDisplay(false);
      setStore(d);
      setDisplay(false);   
      setData(items.filter((da, index) => index <= d ));               

           
    }            
    
    const filterHandler = (fromDate, fromMonth, fromYear) => {
      setItemDataDisplay(false);  
      setGetDateFilter(true);

      setDateFilter(items.filter(item => {

            const date = new Date(item.at).getDate();
            const month = new Date(item.at).getMonth();            
            const year = new Date(item.at).getFullYear();
          
            if(date === fromDate && month === fromMonth && year === fromYear){
              return true;
            }
            return false;
      }));      
        
      
      // setFilterDate(items.filter(item => {
      //   const minute = 1000 * 60;
      //   const hour = minute * 60;
      //   const day = hour * 24;
      //   const year = day * 365;
      //     setGetIterateMonth(new Date(item.at).getMonth());
      //     setGetDay(new Date(item.at).getDate());
      //     setGetYear(new Date(item.at).getFullYear());

      //     console.log(new Date(item.at).getDate() === fromYear);
      //     console.log(new Date(item.at).getDate(), fromYear);
      //       }))
    };
    
  const textHandler = (e) => { 
    setItemDataDisplay(false);  
    setDisplay(true);          
    setTextList(items.filter(item => {
      if(item.author.includes(String((e.target.value))) || item.text.includes(String((e.target.value)))){
        return true;
      }
      return false;
  
    }
      ));    
      
  };

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch("https://dev.ylytic.com/ylytic/test");
  //       const listItems = await response.json();
  //       setItems(listItems.comments);
  //     } catch (err) {
  //       console.log(err.stack);
  //     }
  //   };
  //   (async () => await fetchItems())();
  // }, []);
  const filterBoxHandler = () => {
    setFilterBox(prev => !prev);
  }

  return (
    <div className="body_style">
      <div className="header_style">
        <div className="header_logo">
          <img src={Logo} alt='ylytic-logo' /><span>INTERNSHIP PROJECT</span>
        </div>
        <div className="filter_box">
          <div className="para_div">
            <button onClick={filterBoxHandler}>FILTER BOX</button>
          </div>
          {
            filterBox ?        
              (<div className="filter_box_content">
                  <TextFilter onChange={textHandler} />           
                  <Filter onChange={filterHandler} /> 
                </div> 
              ) : ""         
          }
        </div>
      </div>  
    
      <div className="content_box">
        <div className="pagination_box">
          <Page onChange={paginationHandler} data={store} />
          <Pagination onChange={paginationHandler} />
        </div>
        <div className="table_box">
          <table className="table_row">
            <tr>
              <th className="table_row_name">Name</th>
              <th className="table_row_date">Date</th>
              <th>Comments</th>
              <th className="table_row_like">Likes</th>
              <th className="table_row_replay">Replay</th>
            </tr> 
            {itemDataDisplay ? (itemData.map((item) => (
                  <Data
                    name={item.author}
                    date={item.at}
                    like={item.like}
                    replay={item.reply}
                    text={item.text}
                  />
              )))
              : ''
            } 
            {getDateFilter ? (dateFilter.map((item) => (
                  <Data
                    name={item.author}
                    date={item.at}
                    like={item.like}
                    replay={item.reply}
                    text={item.text}
                  />
              )))
              : ''
            }        
            {display ?                  
              (textList.map((item) => (
                  <Data
                    name={item.author}
                    date={item.at}
                    like={item.like}
                    replay={item.reply}
                    text={item.text}
                  />
                ))) : 
                (data.map((item) => (
                  <Data
                    name={item.author}
                    date={item.at}
                    like={item.like}
                    replay={item.reply}
                    text={item.text}
                  />
              )))  
            }        
          </table>
        </div>
      </div>
    </div>
  
    
  );
};

export default App;