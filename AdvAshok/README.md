# AdvAshok Website

AdvAshok is a website project aimed at creating a digital platform for Advocate Ashok Kumar Sharma, a renowned lawyer based in Gujarat, India. The purpose of the website is to showcase Advocate Sharma’s expertise, improve client communication, and establish a strong digital presence.

## Project Details

- **Project Name:** AdvAshok
- **Author:** Shobhin Thomas Saj

## Project Overview

AdvAshok is designed to serve as an online portfolio for Advocate Ashok Kumar Sharma. The website will highlight his achievements, services, and legal expertise. By creating this digital platform, the project aims to enhance Advocate Sharma’s visibility and attract a wider clientele.

## Features

The following features are planned for the AdvAshok website:

1. **Homepage:**
   - Introduction to Advocate Ashok Kumar Sharma.
   - Display of key achievements and areas of legal expertise.

2. **Services:**
   - Detailed information about the legal services offered by Advocate Sharma.
   - Clear categorization of services for easy navigation.

3. **Contact Information:**
   - Contact form for clients to reach out for legal assistance.
   - Direct contact details for quick communication.

## Notes:

 **02-10-2024:**
 - Commenced Project development in Angular
 - Webpage Master Template created with placeholder for Home, Services and Contacts Page[Single Page Approach]

 **02-20-2024:**
 - HomePage Component created
 - HomePage Hero Content development completed
 - New route added to 'app.routes.ts' for homepage
 
 **02-28-2024:**
 - Fixed Responsive layout issues in HomePage component.
 - Started working on HomePage Legal updates slider.
 
 **03-08-2024**
 - Decided to change HomePage Layout.
 - Hero Content modified..again!!
 - Need research on responsive typography!

 **03-10-2024**
 - Responsive typography...all thanks to clamp() function.
 - defined css variables for font sizes one each for hero text,titles,sub-headings and body.

 **03-14-2024**
 - Started working on About Us section, skipping legal slider for now.
 - About us section is complete.
 - Moving on to the "Vision" section which basically sets forth the vision of the client and will also details what sets the client apart from other lawyers.
 - Vision section completed using a list layout and also uses font-awesome resources.

 **03-15-2024**
 - Exploring options for plugin sliders/carousals to be implemented into a reusable slider component.
 - Options include Owl Carousal, Swipers.js and Ngx-Slick-Carousal.
 - Owl Carousal implemented and tested, found out that it acts weird when switching slides in lower screen widths.
 - Will experiment Ngx-Slick-Carousal tomorrow.

 **03-16-2024**
 - Installed Ngx-Slick-Carousal Package using
 ```
 npm i ngx-slick-carousel
 ```
 - Added styles and necessary script sources to angular.json
 - We already have a sliderComponent created earlier to test out Owl Carousal.
 - We need to usethe SlickCarousal Module such that it displays slides of info or legal updates from different sources instead of images which is what sliders/carousals are used for basically.
 - Data for the slider will be stored in a separate file called **updatesDB.ts**.

 **03-17-2024**
 - Feeding news updates from an API that can feed live updates seems to be a better option compared to having data stored locally.
 - News API seems to be a good fit as its easy to implement and also offers customization of search query and other parameters.
 - The app will also include a service called "ContentFetch", which will basically fetch data from the API and will supply the same to the 
 slider component.
 - In order to make the slider component reusable, the input operator of angular is being used where in a string will be passed along 
 with the slider component selector which will help return the sppropriate sslider with data such as news updates, services offered by 
 client, customer review cards etc.
 - The service and the slider component tested for functionality and everything is working fine, the slider component will take two inputs as of now,
 either "news" or "services" for the live updates slider and the services slider.
 - With the sliders implemented, the homepage is complete.
 - Started working on the Services page. The page starts with a banner that says Services and this will be the same layout for the 
 Contacts page as well.
 - Banner is followed by an intro para and this is followed by cards categorizing and listing out the services offered by the client.
 - The cards will be followed by a client testimonials slider which will display reviews from clients customers.
 - We also need a reusable Form component which needs to be on the home page as well as the contact page.
 - Service page layout complete till Service cards, also added a shadow to the cards and made it responsive using bootstrap grid classes.
 - The remaining work on Services page and the Contact page will be continued tomorrow.
 
**03-18-2024**
 - Contact Page banner and intro text added.
 - Intro text is followed by a contact info section which will include the clients physical office address,phone number and 
 email id along with embedded google maps widget.
 - FontAwesome icons used as prefixes to contact info content.
 - the google map embedded needs to be made responsive using custom css as there's overflow when the container shrinkks on window resize.
 - found a youtube video which specifically deals with adding responsiveness to google maps embedded into webpages.
 - Started working on the reusable contact form component.
 - Based on research, Angular ReactiveForms will be used for validation along with bootstrap for form styling.
 - Youtube videos from the channel "AyyazTech" were found to bbe helpful in building out the form and enabling validation.
 - The submit button needs to be kept disabled until the form is validated which includes the user agreeing to the privacy pollicy.
 - Privacy policy can be viewed by the user on clicking the link next to the checkbox for policy agreement and this will open up a modal with the Privacy Policy.
 - With that we are done with building the form and enabling validation.

 **03-21-2024**
 - Now the next task is to utilize the formdata and send an email with this to the client so that the client can contact the user back with support/assistance.
 - Found a great service available online called emailjs which uses the Gmail API to send emails from web apps.
 - installed emailjs package in the angular app
 ```
 npm install --save @emailjs/browser
 ```
 - Found usage instructions in emailjs documentation and also got help from youtube videos on how to implement emailjs.
 - created a profile in the emailjs's website and linked a gmail account to the profile and this is where the formdata will be sent to as an email.
 - The emailjs dashboard allows users to create custom email templates and this will be used to send the email, and in addition to this, emailjs also allows saving contact details from formdata to be accessed later so that helps solve our confusion on whether to implement a database to save user data.
 - Added a custom email template for the client.
 - Implemented emailjs within the onSubmit function which gets invoked when the submit button is clicked.
 - For now,on succesful execution, the browser will show an alert saying success.
 - Test emailjs and everything is working fine, the gmail id linked to emailjs profile receives email using the custom template.
 - The alert message needs to be replaced with a sweetalert nootification similar to the one used ine .NET MVC BookStore web app.

 **03-24-2024**
 - Ok,so we were about to add sweetalert to our contactform component. Found instruction on how to add sweetalert into angulap project in documentation.
 - SweetAlert added to the form component which will show a dialog saying message sent.
 ```
 Swal.fire({
            title: "Message Sent",
            text: "AdvAshok will reach out to you soon",
            icon: "info"
           });
 ```
 - Now that looks cool,so thats the end of working on the contact form component and it has been added to the contact page for now and can be used implemented anywhere on the page as per requirement since its a standalone component and hence is REUSABLE.
 
 **03-26-2024**
 - The favicon is still the angular default and this needs to be changed.
 - Finally, an opportunity to utilize Adobe Illustrator skills from sem 1 to build a custom icon that goes along with the client's logo.
 - Logo created and now we have our own custom favicon.
 - The news API is not doing a good job all the time returning relevant info, came across a custom api endpoint in github and this will replace the newsapi.or url being used so far to fetch news updates, and the image also seems to be unecessary as sometimes the api returns images not suitable for he user, will remove that as well so that there's overall a cleaner look.
 - Ok, the remaining bit is a scroll to top button which is mandatory to improve user expreience.
 - Scroll to top button added using font-aswesome icon and custom css. The button will be visible only when the user starts scrolling the page.

## Project Status 
 1. WebPage dev completed [03-26-2024]
 2. Testing Complete [04-06-2024]

## Getting Started

Follow these steps to set up and run the AdvAshok website locally:

1. **Clone the Repository in Visual Studio Code:**
git clone https://github.com/ShobhinSaj/AdvAshok.git

2. **Open Terminal in VS Code:**
- Navigate to the project folder in the terminal.

3. **Install Dependencies:**
npm install

4. **Start the Application:**
npm start

5. **View in Browser:**
- Open your browser and go to [http://localhost:4200](http://localhost:4200).

## Project Status

The project is currently in development, and regular updates will be made to enhance its features and functionality.
