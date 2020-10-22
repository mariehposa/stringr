import React from 'react';
import { StyledAll, StyledDiv, StyledNav, StyledP, InnerDiv } from './styles';
import { Route } from "react-router-dom";

export default function Faq() {
    return (
        <StyledAll id={"faq"}>
            <StyledDiv>
                <StyledNav to="/">What is Stringr?</StyledNav>
                <StyledNav to="/faq/payment_time">I uploaded video to the Stringr platform. When will I get paid? </StyledNav>
                <StyledNav to="/faq/app_usage">How do I use the Stringr app? </StyledNav>
                <StyledNav to="/faq/phone_usage">Do I need to use my phone to take video? </StyledNav>
                <StyledNav to="/faq/payment_way">How much do people typically get paid per video? </StyledNav>
                <StyledNav to="/faq/form">Will I get a 1099 tax form from Stringr? </StyledNav>
                <StyledNav to="/faq/customers">Who are Stringr’s customers? </StyledNav>
                <StyledNav to="/faq/email">I need to change my email. Where do I do that? </StyledNav>
            </StyledDiv>

            <InnerDiv> 
                <Route exact path="/" component={First} />
                <Route exact path="/faq" component={First} />
                <Route path="/faq/payment_time" component={PaymentTime} />
                <Route path="/faq/app_usage" component={AppUsage} />
                <Route path="/faq/phone_usage" component={PhoneUsage} />
                <Route path="/faq/payment_way" component={PaymentWay} />
                <Route path="/faq/form" component={Form} />
                <Route path="/faq/customers" component={Customers} />
                <Route path="/faq/email" component={Email} />
            </InnerDiv> 
        </StyledAll>
    )
}

export function First() {
    return (
        <> 
            <StyledP>Stringr is an innovative platform that allows media organizations to browse request and purchase video from a growing network of 100K contributors. It is the largest contributor network of its kind and provides a simple solution for outlets seeking video .</StyledP>
            <StyledP>The media organizations can preview all footage. If they like what they see, they can immediately download the video. Once they do, you (the videographer) will get paid the next business day!</StyledP>
            <StyledP>Stringr also brings work to you! If you download our app and enable push notifications, Stringr will notify you when the media outlets want something filmed.</StyledP>   
        </>
    )
}

export function PaymentTime() {
    return (
        <>
            <StyledP>Stringr pays its videographers via PayPal. When a video is downloaded by a customer, our videographers receive payment by the end of the next business day. If your video is downloaded on a Friday or on the weekend, you will receive payment by the end of the day on Monday. If your video is not downloaded, you will not receive payment.</StyledP>
        </>
    )
}

export function AppUsage() {
    return (
        <>
            <StyledP>Download the Stringr app from the Google Play store or the App Store. Once downloaded, create an account, turn on your location services and turn on app notifications. When a customer requests video in your area, Stringr will notify you through the app. You, along with other Stringrs in the area, can accept the request, shoot video, and upload it directly through the app.</StyledP>
            <StyledP>If your video is used, you get paid! Every time a different media outlet downloads your video, you get paid.</StyledP>
            <StyledP>You can also view requests on the Stringr website. Sign up or sign in using the same credentials as the app, and click ‘Local Requests’ to view opportunities near you.</StyledP>
        </>
    )
}

export function PhoneUsage() {
    return (
        <>
            <StyledP>No. Stringr video can be taken via phone or camera. To upload footage from your camera, simply go to www.stringr.com and log in. The ‘upload’ button will give you the tools you need to upload your video, name it, and tag it correctly. </StyledP>
        </>
    )
}

export function PaymentWay() {
    return (
        <>
            <StyledP>A requested video will always have the payment shown on the request. If you upload a video on your own (not in response to a footage request) and it sells, we pay $40 per video or set. If multiple customers download your video, you get paid multiple times! We also keep the videos in our archive, so your video might sell later—weeks, months, or even years after you shot it. </StyledP>
        </>
    )
}

export function Form() {
    return (
        <>
            <StyledP>No. We use the service PayPal to pay you for your videos. You can read more about how and when PayPal issues 1099 forms here: https://www.paypal.com/us/smarthelp/article/how-does-paypal-report-my-sales-to-the-irs-will-i-receive-a-tax-form-1099-k-faq729</StyledP>
        </>
    )
}

export function Customers() {
    return (
        <>
            <StyledP>Stringr customers are a mix of broadcast and digital news agencies from across the world, and innovative production companies, brand and advertisers looking for more content.</StyledP>
        </>
    )
}

export function Email() {
    return (
        <>
            <StyledP>You can change your email at any point by logging into the app and going to profile. There, click ‘edit’ on the top right hand corner, and you will be able to change your email. Send an email to Customers request all kinds of footage like b-roll exterior shots, shots of crowds, public spaces, events and interviews.</StyledP>
        </>
    )
}