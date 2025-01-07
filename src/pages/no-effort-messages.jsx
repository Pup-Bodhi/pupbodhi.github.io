import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "./../App.css"

import { Button } from 'primereact/button';

export default function NoEffortMessages() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-column gap-4 text-center">
            {/* <div className="font-starline text-7xl py-3 text-center">no-effort message</div> */}
            <div className="flex flex-column gap-2">
                <div className="font-urbanist font-bold text-4xl">So, you wrote me a no-effort message?</div>
                <div className="text-2xl">Well, here's my no-effort response to tell you I'm not interested in talking to you right now.</div>
            </div>
            <div className="">If you <i>really</i> want to talk with me, here's what I suggest you do.</div>
            <div className="flex flex-column lg:flex-row gap-5 justify-content-center align-items-start">
                <div className="flex flex-column justify-content-center text-center gap-3">
                    <div className="mx-auto border-circle border-2 border-900 border-solid w-3rem h-3rem flex flex-row align-items-center justify-content-center font-urbanist text-3xl font-bold">1</div>
                    <div>
                        Meticulously go through my about page, read up on who I am, and understand my kinks, interests, and what I'm looking for.
                    </div>
                    <Button className="button align-self-center" label="about" onClick={() => navigate("/about")} severity="info" />
                </div>
                <div className="flex flex-column justify-content-center text-center gap-3">
                    <div className="mx-auto border-circle border-2 border-900 border-solid w-3rem h-3rem flex flex-row align-items-center justify-content-center font-urbanist text-3xl font-bold">2</div>
                    <div>
                        Take some time and fill out the vetting form, so I can understand who you are, and what you're looking for. This helps me determine if we're a good fit for each other.
                    </div>
                    <Button className="button align-self-center" label="vetting form" onClick={() => navigate("/vetting-form")} severity="info" />
                </div>
                <div className="flex flex-column justify-content-center text-center gap-3">
                    <div className="mx-auto border-circle border-2 border-900 border-solid w-3rem h-3rem flex flex-row align-items-center justify-content-center font-urbanist text-3xl font-bold">3</div>
                    <div>
                        Try to message me again, but this time put some effort into it. Write a nice introduction about you, and tell me why you're reaching out.
                    </div>
                    <div>Make sure to include the word "trapezoid" in your new message so I know that I got through to you.</div>
                </div>
            </div>
            <div className="">If you can show me that you care, and are respectful of my time, I will be happy to chat with ya.</div>
            <div className="flex flex-column text-left gap-2">
                <div className="font-urbanist font-bold text-2xl">Why am I a stickler for no-effort messages?</div>
                <div>Time. With the amount of people reaching out to me, I psysically cannot talk and meet with everyone. And in my experience, it's those people who write me messages such as "hi", "hello", "ur hot", etc... that waste my time the most.</div>
            </div>
            <div className="flex flex-column text-left gap-2">
                <div className="font-urbanist font-bold text-2xl">What's the takeaway from all this?</div>
                <div>Even if you do decide to not message me again, understand that for myself, and a lot of the kink community, no-effort messages are extremely annoying to deal with. As much as I'd like to talk to more poeple, 9 times out of 10 I end up wasting my time by responding to these no-effort messages, with those conversaitons going nowhere.</div>
                <div>I have been fortunate to have some amazing experiences with some hard-to-access people simply because I am respectful of people's time, talk in complete sentences, and am able to hold a conversation. And going forward, I suggest you do the same.</div>
            </div>

        </div>
    )
};