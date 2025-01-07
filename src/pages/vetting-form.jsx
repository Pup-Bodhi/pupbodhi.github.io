import React, { useState, useRef, useEffect, useCallback } from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "./../App.css"

import emailjs from '@emailjs/browser'
import Axios from 'axios';
import { UAParser } from 'ua-parser-js';

import { Steps } from 'primereact/steps';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';

export default function VettingForm() {

    emailjs.init({ publicKey: "jjWJjRzOYPBVIbCva" });

    const form = useRef(null);
    const [formStyle, setFormStyle] = useState(null)
    const [ipDetails, setIpDetails] = useState(null)
    const [refCode, setRefCode] = useState(`VF-${Math.floor(100000 + Math.random() * 900000)}`)

    const [showSection1, setShowSection1] = useState(true);
    const [showSection2, setShowSection2] = useState(false);
    const [showSection3, setShowSection3] = useState(false);
    const [showSection4, setShowSection4] = useState(false);
    const [showSection5, setShowSection5] = useState(false);

    const [invalid, setInvalid] = useState(false);

    const [activeStep, setActiveStep] = useState(0);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [gender, setGender] = useState('');
    const [sexualOrientation, setSexualOrientation] = useState('');
    const [age, setAge] = useState(null);
    const [location, setLocation] = useState('');
    const [foundPlatform, setFoundPlatform] = useState(null);
    const [inContact, setInContact] = useState(null);

    const [role, setRole] = useState(null);
    const [bodhiRole, setBodhiRole] = useState([]);
    const [kinks, setKinks] = useState('');
    const [limits, setLimits] = useState('');
    const [gear, setGear] = useState('');
    const [experience, setExperience] = useState([]);
    const [idealScene, setIdealScene] = useState([]);
    const [safetyPractices, setSafetyPractices] = useState([]);
    const [photoComfortabilities, setPhotoComfortabilities] = useState([]);

    const [policyChecked, setPolicyChecked] = useState(false);
    const [communicateCkecked, setCommunicateCehecked] = useState(false);
    const [notes, setNotes] = useState([]);

    const stepsItems = [
        {
            label: 'Start'
        },
        {
            label: 'Basic Info'
        },
        {
            label: 'Kinks'
        },
        {
            label: 'Policies'
        },
        {
            label: "Submit"
        }
    ];

    const platforms = [
        { name: 'FetLife', code: 'FetLife' },
        { name: 'Recon', code: 'Recon' },
        { name: 'BlueSky', code: 'BlueSky' },
        { name: 'Twitter', code: 'Twitter' },
        { name: 'Instagram', code: 'Instagram' },
        { name: 'PupSpace', code: 'PupSpace' },
        { name: 'Telegram', code: 'Telegram' },
        { name: 'Discord', code: 'Discord' },
        { name: 'Website', code: 'Website' },
        { name: 'Munch/Social Event', code: 'Munch/Socal Event' },
        { name: 'Play Party', code: 'Play Party' },
        { name: 'Convention', code: 'Convention' },
        { name: 'Friend', code: 'Friend' },
        { name: 'Other', code: 'Other' }
    ];

    const inContacts = [
        { name: 'Yes', code: 'Yes' },
        { name: 'No, but about to message!', code: 'No, Will Message' },
        { name: 'No', code: 'No' }
    ];


    const roles = [
        { name: 'Top/Dom', code: 'Top' },
        { name: 'Vers/Switch', code: 'Switch' },
        { name: 'Bottom/Sub', code: 'Sub' },
        { name: 'New/Don\'t Know', code: 'New/Don\'t Know' }
    ];

    const photoComfortability = [
        { name: 'Any', code: 'All' },
        { name: 'Unmasked Face', code: 'Unmasked Face' },
        { name: 'Masked Face', code: 'Masked Face' },
        { name: 'Dressed Body', code: 'Dressed Body' },
        { name: 'Undressed Body', code: 'Undressed Body' },
        { name: 'Covered Genetalia', code: 'Covered Genetalia' },
        { name: 'Uncovered Genetalia', code: 'Uncovered Genetalia' },
        { name: 'No Photos/Videos', code: 'None' },
    ];

    const bodhiRoles = [
        { name: 'Submissive', code: 'Sub' },
        { name: 'Switch', code: 'Switch' },
        { name: 'Dominant', code: 'Dominant' },
        { name: 'Slave/Object', code: 'Slave/Object' },
        { name: 'Emotional Support Pet', code: 'Emotional Support Pet' },
        { name: 'Mentor/Teacher', code: 'Mentor/Teacher' },
        { name: 'Fuck Buddy', code: 'Fuck Buddy' },
        { name: 'Event Buddy', code: 'Event Buddy' },
        { name: 'Friend', code: 'Friend' },
        { name: 'Other (please specify!)', code: 'Other, see below.' },
    ];

    async function submit() {

        const parser = new UAParser();



        const emailParams = {
            name: name,
            username: `@${username}`,
            pronouns: pronouns,
            title: title,
            gender: gender,
            sexualOrientation: sexualOrientation,
            age: age,
            location: location,
            foundPlatform: foundPlatform.code,
            inContact: inContact.code,

            role: role.code,
            bodhiRole: bodhiRole.map(x => x.code).join(', '),
            kinks: kinks,
            limits: limits,
            gear: gear,
            experience: experience,
            idealScene: idealScene,
            safetyPractices: safetyPractices,
            photoComfortabilities: photoComfortabilities.map(x => x.code).join(', '),
            policyChecked: (policyChecked) ? 'Yes' : 'No',
            communicateCkecked: (communicateCkecked) ? 'Yes' : 'No',
            notes: notes,
            ipAddress: (ipDetails) ? ipDetails.ip : 'Error',
            ipLocation: (ipDetails) ? `${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}` : 'Error',
            device: `${parser.getBrowser()}, ${parser.getDevice()}, ${parser.getOS()}`,
            isp: (ipDetails) ? ipDetails.org : 'Error',
            referenceCode: refCode,
        }

        emailjs.send('service_oqa8vwp', 'template_ir63hcm', emailParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    }

    useEffect(() => {
        Axios.get('https://ipapi.co/json/').then((res) => {
            setIpDetails(res.data);
        }).catch((e) => {
            console.error(e)
        });
    }, [])

    function SetActivePage(current, pg) {

        let isInvalid = false;

        switch (current) {
            case 1: {
                if (name.length < 1 || username.length < 1 || !age || location.length < 1 || !foundPlatform || !inContact) isInvalid = true; break;
            }
            case 2: {
                if (!role || !bodhiRole || kinks.length < 1 || limits.length < 1 || experience.length < 1 || idealScene.length < 1 || safetyPractices.length < 1 || photoComfortabilities.length < 1) isInvalid = true; break;
            }

        }

        console.log(role)

        if (isInvalid && current < pg) {
            setInvalid(true);
            form.current.scrollIntoView({
                behavior: 'smooth'
            })
            return;
        }
        setFormStyle('vetting-form-hidden');
        form.current.scrollIntoView({
            behavior: 'smooth'
        })
        setShowSection1(false);
        setShowSection2(false);
        setShowSection3(false);
        setShowSection4(false);
        setShowSection5(false);
        setTimeout(() => {
            let newPg = pg + 1;
            switch (newPg) {
                case 1: setShowSection1(true); break;
                case 2: setShowSection2(true); break;
                case 3: setShowSection3(true); break;
                case 4: setShowSection4(true); break;
                case 5: setShowSection5(true); break;
            }
            setInvalid(true);
            setActiveStep(pg);
            setInvalid(false);
            setFormStyle('vetting-form');
        }, 400)
    }

    return (
        <div>
            <div className="font-starline text-6xl lg:text-8xl py-3 text-center">vetting form</div>
            <div className="w-full" ref={form}>
                <Steps model={stepsItems} activeIndex={activeStep} className="py-4" style={{ backgroundColor: '#ecebe5' }}/>
                <div id="invalid-text" className={(invalid) ? 'flex' : 'hidden'}>
                    Please fill out all required fields.
                </div>
                <div id="vetting-form" className={formStyle}>
                    <div id="form-section-1" className={(showSection1) ? 'form-section flex' : 'form-section hidden'}>
                        <div className="form-element">
                            Aroo! Thank you for your interest in playing with me! Please fill this form out to the best of your
                            ability so I can determine if we're a good fit together! This form should take around 5
                            minutes to complete.
                        </div>

                        <h2 className="text-center">Frequently Asked Questions</h2>

                        <div className="form-element">
                            <div className="form-element-title">Why does this form exist?</div>
                            <div>
                                I get <i>lots</i> of messages from people wanting to play with me. To the point where it's
                                physically impossible to play with everyone who reaches out.
                            </div>
                            <div>
                                This form is meant to help me learn more about you, and determine if we'd be a good fit
                                together. It also helps me widdle down the playing field to find those people genuinely
                                interested in me, instead of the people who just want a quick fuck.
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-element-title">What am I looking for in a play partner?</div>
                            <div>
                                A pawsitive connection is what's most important to me. I look for people who share similar
                                interests than I, who are honest and approachable, and understand and respect my needs
                                and limitations. I prefer having an ongoing friendship over a one-night stand.
                            </div>
                            <div>
                                Knowing about your age, gender, sexual orientation, experience, and gear collection is more
                                out of curiosity than to judge. While I'm open to play with anyone, regardless of these
                                factors, I do like to know basic information about all my play partners.
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-element-title">Why do you have so many policies?</div>
                            <div>
                                This is to make sure we're always on the same page, and to cover all of my bases.
                                I like to be upfront with my all my practices, wants, needs, and limitations.
                            </div>
                        </div>

                        <div className="form-element">

                            <div className="form-element-title">What additional information is collected, and where is it stored?</div>
                            <div>
                                On top of your responses, this form collects your IP address and browser information. This
                                is used to prevent spam and abuse through the form.
                            </div>
                            <div>
                                Any information submitted is sent to my email address and stored in a database, so I can look
                                over it and reference later. Privacy is very important to me; your responses are kept ony between
                                you and me.
                            </div>
                        </div>

                        <div className="form-element form-button-div">
                            <Button className="button" label="Start" onClick={() => { SetActivePage(0, 1) }} />
                        </div>
                    </div>

                    <div id="form-section-2" className={(showSection2) ? 'form-section flex' : 'form-section hidden'}>
                        <div className="form-element">
                            <label htmlFor="name">Name<span className="form-required"> *</span></label>
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="name-help" />
                            <small id="name-help">
                                What you want me to call you. Scene name is fine.
                            </small>
                        </div>
                        <div className="form-element">
                            <label htmlFor="telegram-username">Telegram Username<span className="form-required"> *</span></label>
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-at"></i>
                                </span>
                                <InputText id="telegram-username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="name">Title</label>
                            <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="pronouns">Pronouns</label>
                            <InputText value={pronouns} onChange={(e) => setPronouns(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="gender">Gender</label>
                            <InputText id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="sexual-orientation">Sexual Orientation</label>
                            <InputText id="sexual-orientation" value={sexualOrientation} onChange={(e) => setSexualOrientation(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="age">Age<span className="form-required"> *</span></label>
                            <InputNumber value={age} onValueChange={(e) => setAge(e.value)} min={0} max={100} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="location">Location<span className="form-required"> *</span></label>
                            <InputText id="location" aria-describedby="location-help" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <small id="location-help">
                                City/State/Country is fine. No exact addresses, please.
                            </small>
                        </div>
                        <div className="form-element">
                            <label htmlFor="found-platform">Where did you first hear about Bodhi?<span className="form-required"> *</span></label>
                            <Dropdown id="found-platform" value={foundPlatform} onChange={(e) => setFoundPlatform(e.value)} options={platforms} optionLabel="name"
                                className="w-full md:w-14rem" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="found-platform">Are you currently in contact with Bodhi?<span className="form-required"> *</span></label>
                            <Dropdown id="in-contact" value={inContact} onChange={(e) => setInContact(e.value)} options={inContacts} optionLabel="name"
                                className="w-full md:w-14rem" />
                        </div>
                        <div className="form-element form-button-div">
                            <Button outlined icon="pi pi-angle-left" onClick={() => SetActivePage(1, 0)} />
                            <Button className="button" label="Next" icon="pi pi-angle-right" iconPos="right" onClick={() => SetActivePage(1, 2)} />
                        </div>
                    </div>

                    <div id="form-section-3" className={(showSection3) ? 'form-section flex' : 'form-section hidden'}>
                        <div className="form-element">
                            <label htmlFor="role">Role<span className="form-required"> *</span></label>
                            <Dropdown id="role" value={role} onChange={(e) => setRole(e.value)} options={roles} optionLabel="name"
                                className="w-full md:w-14rem" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="bodhiRole">What roles would you like Bodhi to play?<span className="form-required"> *</span></label>
                            <MultiSelect value={bodhiRole} onChange={(e) => setBodhiRole(e.value)} options={bodhiRoles} optionLabel="name"
                                display="chip" className="w-full md:w-20rem" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="kinks">Notable Kinks<span className="form-required"> *</span></label>
                            <InputText id="kinks" value={kinks} onChange={(e) => setKinks(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="limits">Limits<span className="form-required"> *</span></label>
                            <InputText id="limits" value={limits} onChange={(e) => setLimits(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="gear">Gear You Own</label>
                            <InputText id="gear" value={gear} onChange={(e) => setGear(e.target.value)} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="experience">Briefly describe your experience in kink.<span className="form-required"> *</span></label>
                            <InputTextarea value={experience} onChange={(e) => setExperience(e.target.value)} rows={5} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="idealScene">Briefly describe an ideal scene with Bodhi.<span className="form-required"> *</span></label>
                            <InputTextarea value={idealScene} onChange={(e) => setIdealScene(e.target.value)} rows={5} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="safetyPractices">Briefly describe your communication, aftercare and safety practices.<span className="form-required"> *</span></label>
                            <InputTextarea value={safetyPractices} onChange={(e) => setSafetyPractices(e.target.value)} rows={5} />
                        </div>
                        <div className="form-element">
                            <label htmlFor="photo-comfortability">Comfortability with photos/videos.<span className="form-required"> *</span></label>
                            <MultiSelect value={photoComfortabilities} onChange={(e) => setPhotoComfortabilities(e.value)} options={photoComfortability} optionLabel="name"
                                display="chip" className="w-full md:w-20rem" />
                            <small id="photo-comfortability-help">
                                Consent will always be asked before media with you in it is posted online.
                            </small>
                        </div>

                        <div className="form-element form-button-div">
                            <Button outlined icon="pi pi-angle-left" onClick={() => SetActivePage(2, 1)} />
                            <Button className="button" label="Next" icon="pi pi-angle-right" iconPos="right" onClick={() => SetActivePage(2, 3)} />
                        </div>
                    </div>

                    <div id="form-section-4" className={(showSection4) ? 'form-section flex' : 'form-section hidden'}>
                        <div className="form-element">
                            <div>The following information is important. Please read fully and carefully.
                            </div>
                            <ul className="flex flex-column gap-2">
                                <li>
                                    <b>Consent and Safety: </b>Consent and safety are always the top priority. Proper procedures will be followed to ensure
                                    that all participents have a safe and enjoyable experience.
                                </li>
                                <li>
                                    <b>Sexual Activities: </b>Bodhi is <a href="https://www.healthline.com/health/demisexual">demisexual</a>, and
                                    prefers to keep all play non-sexual. This includes oral sex, anal sex, and rimming. Exceptions
                                    are made at it's discresion on a case-by-case basis, <b>do not expect to have sex with it</b> (or
                                    you will be sorely disappointed when it tells you no!).
                                </li>
                                <li><b>Play/Travel Costs: </b>Generally, you are responsible for all costs to play (e.g. intercity travel, hotel rooms, dungeon rentals, etc...). Bodhi
                                    will only cover resonable local travel and food costs. Exceptions are made on a case-by-case basis.</li>
                                <li><b>Online Play: </b>Bodhi does not engage in online play.</li>
                                <li><b>Hosting: </b>Bodhi has a limited capacity to host, depending on the time of year and it's location.</li>
                                <li><b>Overnights: </b>Generally, Bodhi does not stay/allow play partners to stay overnight during a first play session. This can be arranged for future visits if things go well!</li>
                                <li><b>Gear: </b>Bodhi owns a lot of gear, and is happy to share it's equipment for your use during scenes! However, please be careful, courtious, and listen to it's directions to avoid breaking expensive pieces of gear.</li>
                                <li><b>Photos/Videos: </b>Bodhi loves to document it's scenes on it's social media platforms, taking photos/videos is encouraged! However, it asks that no photos/videos are taken of it's face are posted online. Please ensure all photos/videos has it's face masked/hooded, blurred, or cropped out.</li>
                                <li>
                                    <b>Limits: </b>illegal play, piss, scat, blood, edge play, kissing on lips, public play, findom. Please do not smoke/do drugs while you're in it's presence.
                                </li>
                            </ul>
                        </div>

                        <div className="form-element">
                            <div className="flex align-items-center">
                                <Checkbox inputId="policy-disclaimer" value="Cheese" onChange={e => setPolicyChecked(e.checked)} checked={policyChecked}></Checkbox>
                                <label htmlFor="policy-disclaimer" className="ml-2">I have read and understand these policies.</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="communicate-disclaimer" value="Cheese" onChange={e => setCommunicateCehecked(e.checked)} checked={communicateCkecked}></Checkbox>
                                <label htmlFor="communicate-disclaimer" className="ml-2">I agree to be open, communicative, and honest, to ensure everyone has a safe and pawsitive experience.</label>
                            </div>
                        </div>
                        <div className="form-element">
                            <i>All policies outlined above are subject to change based on Bodhi's discresion.</i>
                        </div>
                        <div className="form-element">
                            <label htmlFor="idealScene">Questions/Comments/Concerns/Special Requests</label>
                            <InputTextarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} />
                        </div>
                        <div className="form-element form-button-div">
                            <Button outlined icon="pi pi-angle-left" onClick={() => SetActivePage(3, 2)} />
                            <Button className="button" label="Submit" icon="pi pi-check" iconPos="right" onClick={() => {
                                SetActivePage(3, 4)
                                submit();
                            }} />
                        </div>
                    </div>

                    <div id="form-section-5" className={(showSection5) ? 'form-section flex' : 'form-section hidden'}>
                        <div className="flex justify-content-center flex-column text-center gap-4">
                            <div className="pt-2">
                                <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'green' }}></i>
                            </div>
                            <div className="font-urbanist font-bold text-5xl">Aroo! You did it ^^</div>
                            <div>Thanks for being part of the minority who cares to put in a little effort to get my attenton.
                                You'll hear back from me soon!
                            </div>
                            <div className="flex flex-column gap-2">
                                <div className="font-urbanist font-bold text-2xl">Your reference code is:</div>
                                <div className="font-urbanist font-bold text-2xl">{refCode}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}