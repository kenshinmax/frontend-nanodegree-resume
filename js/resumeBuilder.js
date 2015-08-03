/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 // bio object

 var bio ={
  "name": "Cliff Sanchez",
  "role": "Web Developer",
  "contacts": {
    "email": "kenshinmax@gmail.com",
    "git": "kenshinmax",
    "twitter": "sanchezruns",
    "blog": "http://cliffsanchez.com/blogs",
    "location": "New York"
  },
  "WelcomeMessage": "Hello everyone",
  "skills":["awesomeness","programming","JS"],
  "biopic": "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/0a4/13c/2b56208.jpg",
  "display": function(){
    // update bio divs

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    
    // Check to see if any skill info is in the bio object
    if(bio.skills.length>0){
     $("#header").append(HTMLskillsStart);

    var cntr =0;
    while(cntr<bio.skills.length){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[cntr]);
      $("#skills").append(formattedSkill);
      cntr++;
     }
    }
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.git));
    $("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
    
    // update the footer
    $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.git));
    $("#footerContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
    
  }
 }

// call the bio function
bio.display();

// define work object
 var work = {
  "jobs":[
    {
    "employeer": "Oracle",
    "title": "Sales Consultant",
    "location": "New York",
    "dates": "06-2015 - Present",
    "description": "Specialist for Oracle cloud solutions, with a focus on the Oracle Sales Cloud for Enterprise opportunities."
    },
    {
     "employeer": "Oracle",
     "title": "WebCenter Sales Consultant",
     "location": "New York",
     "dates": "09-2011 - 06-2015",
     "description": "WebCenter specialist for North America supporting Enterprise accounts.  I provided unique solutions for organizations evaluating the Oracle Digital Experience Platform (WebCenter Suite)."
    }],
    "display": function(){
      // displayWork function
     if(work.jobs.length>0){
        $("#workExperience").append(HTMLworkStart);
        for(job in work.jobs){
         var formattedEmployeer = HTMLworkEmployer.replace("%data%",work.jobs[job].employeer);
         var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
         var formattedEmpTitle = formattedEmployeer + " " + formattedTitle;  
          $(".work-entry:last").append(formattedEmpTitle);

         var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
         var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);   
         $(".work-entry:last").append(formattedDate+formattedDesc);
        }
      }

   }
 } 
 // call displayWork function
 work.display();
    

var projects={
  "projects":[
     {
     "name": "Responsive mockup",
     "dates": "07-2015",
     "description": "A page that is fully responsive and leverages the Twitter Boostrap framework.  The project was built to specifications via a wireframe, which included HTML Semantic tags.",
     "images":[
        "http://www.oracle.com/ocom/groups/public/@opnpublic/documents/digitalasset/1901815.jpg",
        "http://cdn.emailvendorselection.com/wp-content/uploads/2013/12/oracle_eloqua_responsys.jpg"
        ]
     },
     {
     "name": "ADF Web project",
     "dates": "11-2014",
     "description": "ADF project that converts JSON response into Java POJOs and exposes content via ADF Data control.  This example includes a simple navigation for master-detail relationship of data.",
     "images":[
        "http://www.oracle.com/ocom/groups/public/@opnpublic/documents/digitalasset/1901815.jpg",
        "http://cdn.emailvendorselection.com/wp-content/uploads/2013/12/oracle_eloqua_responsys.jpg"
        ]
     }
   ],
   "display":function(){
     for(project in projects.projects){ 
       $("#projects").append(HTMLprojectStart);
         var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].name);
         var projDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
         var projDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
         
         $(".project-entry:last").append(projectTitle);        
         $(".project-entry:last").append(projDates);
         $(".project-entry:last").append(projDesc);
    
         // interate through array of images and append the src to the div
         if(projects.projects[project].images.length>0){
            
            for(image in projects.projects[project].images){
              var projImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
              $(".project-entry:last").append(projImage);
            }
         } 
       }
   }
}

// call project display function
projects.display();

 var education = {
  "schools": [
    {
      "name": "Pace University",
      "city": "New York",
      "location": "New York, NY",
      "degree": "BS",
      "major": "Information Systems",
      "minor": "Office Information Systems",
      "graduation": "07-2001"

    },
    {
      "name": "Udacity",
      "city": "New York",
      "location": "New York, NY",
      "degree": "Nanodegree",
      "major": "Front-End Developer",
      "minor": "none",
      "graduation": "11-2015"
    }
   ],
   "onlineCourses":[
    {
     "title": "Javascript Syntax",
     "school": "Udacity",
     "date": "07-2015",
     "url": "http://www.udacity.com/course/ud804"
    },
    {
     "title": "Responsive Design",
     "school": "Udacity",
     "date": "07-2015",
     "url": "http://www.udacity.com/course/ud872"
    }
   ],
   "display": function(){
    
    $("#education").append(HTMLschoolStart);

    for(school in education.schools) {
     
      $("#education").append(HTMLschoolName.replace("%data%", education.schools[school].name));
      $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
      $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
      $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
      $("#education").append(HTMLschoolDates.replace("%data%", education.schools[school].graduation));

    }
   
    $("#education").append(HTMLonlineClasses);

    for(course in education.onlineCourses){
      $("#education").append(HTMLschoolName.replace("%data%",education.onlineCourses[course].title));
      $("#education").append(HTMLschoolLocation.replace("%data%",education.onlineCourses[course].school));
      $("#education").append(HTMLschoolDegree.replace("%data%", education.onlineCourses[course].date));
      $("#education").append(HTMLschoolMajor.replace("%data%", education.onlineCourses[course].url));
     
    }
      
   }
 }
 
 // display education
 education.display();

 // display the map
 $("#map-div").append(googleMap);

