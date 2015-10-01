var bio = {
	"firstName" : "Wes",
	"lastName" : "Leonardo",
	"role" : "Software Engineer",
	"biopic" : "",
	"skills" : ["HTML","CSS","Javascript"],
	"welcomeMessage" : "Hello There",
	"contacts" : {
		"email" : "lou@gmail.com",
		"mobile" : "815-111-1122",
		"location" : "Las Vegas, NV"
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Facial Network Inc",
			"title" : "Mobile Applications Developer",
			"location" : "Las Vegas, NV",
			"dates" : "2014 - current",
			"description" : "Writing Titanium mobile applications",
		},
		{
			"employer" : "Z4 Poker",
			"title" : "Senior Software Engineer",
			"location" : "Las Vegas, NV",
			"dates" : "2012 - 2014",
			"description" : "Working on poker platform"
		},
		{
			"employer" : "Ribbit",
			"title" : "Senior Software Engineer",
			"location" : "Mountain View, CA",
			"dates" : "2008 - 2012",
			"description" : "Working on poker platform"
		},	
	] 
};

var education = {
	"schools" : [
		{
			"name" : "Fresno State University",
			"years" : "1992 - 1998",
			"location" : "Fresno, CA",
			"majors" : ["Music Performance"],
			"degree" : "Music Performance"		
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "www.udacity.com"
		}
	] 
};

var projects = {
	"projects" : [
		{
			"title" : "Actor ID",
			"dates" : "2014",
			"description" : "Testing"
		}
	]
};

var headerName = HTMLheaderName.replace("%data%", bio.firstName + " " + bio.lastName);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);
var headerMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

$("#header").append(headerName).append(headerRole).append(headerMobile);


$("#main").append(internationalizeButton);


function inName() {
	var formatLastName = bio.lastName.toUpperCase();
	var internationalName = bio.firstName + " " + formatLastName;

	return internationalName
}


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

function displayWork(){
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = jobEmployer + jobTitle;
		var jobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var jobLocation = HTMLworkDates.replace("%data%", work.jobs[job].location);
		var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(jobDates);
		// $(".work-entry:last").append(jobLocation);
		$(".work-entry:last").append(jobDescription);
	}	
}

projects.display = function() {

	for(var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var projectDesc = HTMLprojectDesc.replace("%data%", projects.projects[project].description);	

		$("#project-entry:last").append(projectTitle);
		$("#project-entry:last").append(projectDates);
		$("#project-entry:last").append(projectDesc);
	}
}

$("#mapDiv").append(googleMap);

function logClicks(x,y) {
	console.log("X :: " + x);
	console.log("Y :: " + y);
}

$(document).click(function(loc){
	// console.log(loc);
	
	var x = loc.pageX;
	var y = loc.pageY;

});

