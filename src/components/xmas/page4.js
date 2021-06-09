import React, {Component} from 'react';
import PopUp from "../game/PopUp";
import './xmas.css';
import CompPopUp from "./compPopUp";
import CarouselPopUp from "./CarouselPopUp";
import PhonePopUp from "./PhonePopUp";
import Password from "../game/password";
import Continue from "../game/continueButton";
import ReactPlayer from "react-player";
import video from "../escovid/IMG-1332.mp4";
import {Post} from "../game";
import pic from "../../cards.png";
import Delayed from "../game/delayed";




export default class Page4 extends Component {

    componentDidMount(){
        document.title = "Coming Home"
        console.log(this.props.curr_stage)
        if (this.props.curr_stage != 3) {
            this.props.stage(3)
        }
        if (this.props.timing) {
            this.props.stop(false)
        }
    }

    state = {
        story: false,
        tldr: false,
    };

    readStory = () => {
        this.setState({
            story: true,
            tldr: false,
        });
    };

    readTLDR = () => {
        this.setState({
            story: false,
            tldr: true,
        });
    };



    render() {
        return(
            <div>
                <body align={"center"} className="bg" style={{backgroundImage: 'url("https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/xmas/house.png?raw=true")'}}>
                <div align={"center"}>
                    <div align={"center"} className={"middle"}>
                        <Post title={"30 minutes later..."} caption={""}>
                            <div align={"left"} className={"text-left"}>
                                <p>Caleb pulled up to his house. He rushed past two unrecognized cars in the driveway and threw open the front door.</p>
                                <Delayed waitBeforeShow={5000} children={<p>Just inside, three people were standing. Caleb recognized his father, but there were two women he had never seen before. One was his father’s age, the other looked a bit older than him. All three of them seemed to be talking at once, struggling to get a word in.</p>} />
                                <Delayed waitBeforeShow={14000} children={<p>“Hello?” Caleb butted in. “What’s going on?” The talking instantly stopped and three pairs of eyes turned to look at him.</p>} />
                                <Delayed waitBeforeShow={20000} children={<p>His dad dropped his gaze and began to stammer a response, but he was immediately interrupted by the younger women who bounced over to him. </p>} />
                                <Delayed waitBeforeShow={25000} children={<p>“I’m Julia," she smiled. "Your half sister.” </p>} />
                                <Delayed waitBeforeShow={30000} children={<div align={"center"}>
                                    <button className={"button spaced"} onClick={this.readStory}><h3>Continue Story</h3></button><button className={"button spaced"} onClick={this.readTLDR}><h3>TL;DR</h3></button>
                                </div>} />
                                {this.state.story ?
                                    <div>
                                        <p>For a second Caleb didn’t know what to say. “Uhh, what?” He laughed nervously, “Is this a joke?”</p>

                                        <p>The adults exchanged a look, as Julia piped up again. “No, little Bro. It wouldn’t be such a surprise if our loving parents hadn’t worked so hard to hide it from us.”</p>

                                        <p>Caleb stood motionless, his head spinning, making it very difficult to think straight. Both his father and the older women had begun to speak but he couldn’t hear them.</p>
                                        <p>Finally Caleb turned to look at his father. “Is this true? Do I have a sister? And did you know this whole time?!”</p>

                                        <p>His father straightened. “I didn’t know until last week. But yes. Julia is your half sister.” Caleb’s father said with the slightest of nods, “And this is S—“ </p>

                                        <p>Caleb didn’t wait for the introduction. Anger was building up inside of him threatening to burst. He thought of all those lonely nights staying awake while his parents argued. He thought of the divorce last year, how he never knew who to side with. As much as his parents tried to be there for him, they would never understand. And now this. What else was his father hiding from him?</p>

                                        <p>It all came out at once. Caleb didn’t even know what he was saying, but he didn’t care. He wanted his father to feel his pain. When he finally ran out of insults he whipped around, heading for the door.</p>

                                        <p>His father stood motionless, sadness in his eyes. His feeble attempt at an apology landing on deaf ears, as Caleb stormed up to his room.</p>

                                        <div align={"center"}><p>****</p></div>

                                        <p>Thirty minutes later Caleb, heard a knock on his bedroom door. “Go away” he mumbled. “I don’t want to talk to you.” </p>

                                        <p>“You don’t want to talk to your sister,” Julia replied from the other side of the door, feigning disappointment. Caleb rose to get the door. “Sorry,” he said sheepishly. “I thought it was my dad.” And after a second, “or our dad, I guess.”</p>

                                        <p>“Yeah, still getting used to that too,” Julia replied with half smile. “How are you feeling?”</p>

                                        <p>“Alright, I guess. A lot to take in.” Caleb mumbled. He still didn’t really feel like talking.</p>
                                        <p>“It’s alright to be upset,” Julia replied, sitting down on the floor next to his bed. “You should have seen me a few hours ago when I found out. I was probably worse than you.”</p>

                                        <p>“I doubt that,” Caleb smirked.</p>

                                        <p>“Do you want to hear the whole story? I think that helped me a bit.” Julia asked after a second.</p>

                                        <p>“I guess. I think I’ve put some of it together from your notes though.”</p>

                                        <p>“My notes?” She asked surprised, “What notes?!”</p>

                                        <p>“Ummm,” Caleb laughed nervously. “I kind of went in your house, and came here when I found my own address.” He had been so caught up in the commotion, that’d he’d forgotten that he’d literally broken into someone’s house. </p>
                                        <p>“You got into my mom’s phone and everything?!” Julia laughed with amazement. “We have a trespasser on our hands.”</p>

                                        <p>And then more seriously, “Well I don’t know how much you’ve put together then, but those pictures were all moments in my mom, and our dad’s lives. They’ve been good friends since before college.”</p>

                                        <p>Caleb nodded, he’d put that much together.</p>

                                        <p>“So anyway, they started dating toward the end of college. And apparently they were very happy.”</p>

                                        <p>“They didn’t last very long though. Wasn’t it less than a year and a half?” Caleb asked, “What happened?”</p>

                                        <p>“That’s the thing, apparently it was going so well, that it began escalating too quickly. My mom got kind of nervous and was worried that it was going too fast. She decided that, she needed a break.”  Julia paused briefly. </p>

                                        <p>“That might have been fine, but our dad was really upset about it, and decided that they needed to take some space. Within a couple months, he had started a new relationship, this time with your mom.”</p>

                                        <p>Caleb sat in stunned silence. It was not that anything was particularly surprising given what had transpired in the last hour, but to hear someone say it aloud made it seem so much more real. “Where do we come in?” He finally asked, thinking aloud.</p>

                                        <p>“You see,” Julia continued excitedly. She liked bing the one with all the information for once and not being in the dark. “Before they had broken up, my mom had gotten pregnant, but neither of them knew it. And by the time she found out, our dad was already in the new relationship. My mom claims that she blamed herself for the breakup,  and didn’t want to mess up our dad’s new relationship, so she didn’t tell him about it. So she gave birth to me and committed to raising me herself. Within a couple years, your parents were married and had you.”</p>

                                        <p>“But what changed, why did she decide to tell us?” Caleb still didn’t understand why he was only hearing about this now.</p>

                                        <p>“The one thing my mom said that would change her mind about telling our dad was if your parents relationship didn’t work out. Last month she somehow found out about the divorce, and after a lot of contemplating, decided to tell our dad about me.” </p>

                                        <p>Caleb, was still trying to take all this new information in. He knew it’d be a while before it all sunk in, but he did have one more question. “Wait, but what about you?” He asked. “What did your mom tell you.”</p>

                                        <p>“She always said that she didn’t know who the father was. She’d never given me any more details and I just kind of blindly believed it. That is until last week when I overheard my mom talking on the phone to someone. I swore that I heard her say 'she’s your child.' Ever since then I’ve been nagging my mom with questions and trying to do my own research. Yesterday I found your name written on a sticky note in my mom’s office, and I looked you up and found that you went to the local high school. I knew you had to be connected somehow so I decided to send you an email, without giving too much information away. And here we are.”</p>

                                        <p>As much as he wanted to stay angry, Caleb couldn’t hide a small smile from creeping onto his face.</p>

                                        <div align={"center"}><p>****</p></div>

                                        <p>15 minutes later Caleb followed Julia back down the stairs. He still wasn’t ready to face his father, but he was starting to feeling better. Julia had been so kind. She was right, knowing the whole story took a bit of the sting away.</p>
                                        <p>At the bottom of the stairs they both paused peering into the kitchen. At the kitchen table Sarah and Ben sat conversing face to face for the first time in seventeen years. There was a tinge of awkwardness but they both looked happy. Caleb knew it would be difficult to stay angry at his dad for long.</p>

                                    </div> :
                                null}

                                {this.state.tldr ?
                                    <div>
                                        <p>Finding out that he has a step sister, brings back memories of his parents divorce, and how difficult it was for him. He takes his anger out on his dad before storming up to his room.</p>

                                        <p>Half an hour later, Julia comes to check on him, reassuring him that it’s okay to be upset. After laughing about the fact that Caleb had broken into her house, Julia tells him the story of their dad and her mom. </p>

                                        <p>They had been friends since before college and dated for a year and a half before her mom thought it was escalating too quickly and asked for a break. Their dad was very upset and wanted to take some space and soon got into a new relationship. </p>

                                        <p>A few months later, Julia’s mom Sarah realized she was pregnant, but decided not to tell their dad as to not mess up his current relationship.Recently, after hearing about Caleb’s parent’s divorce, Sarah decided to tell Ben about the child.</p>

                                        <p>Julia had always believed her mom didn’t know the identity of the father, but after overhearing a phone call last week she’d been doing her own research. She found Caleb’s name on a sticky note and emailed him.</p>
                                    </div> :
                                null}

                                {this.state.tldr || this.state.story ?
                                <Continue url={"/anon/onward"} text={"Finish"}/> :
                                null}


                            </div>
                        </Post>
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

