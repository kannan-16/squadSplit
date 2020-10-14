var namesBySquad = {
    Squad43: ["Aarya D", "Aditya Bachepallikar", "Kavya", "Arya Anand", "Arav Tikkoo", "Nenika", "Mayank Agarwal", "Atharv Bhagat", "Shrreya", "Tanve", "Hiranmayi", "Vaishnav"],
    Squad44: ["Nidhi", "Anvi Gupta", "Rudra Kumar", "Shoban", "Eshwar", "Mahima Sree", "Poorvika Sree", "Sukirtha", "Eshan venkatesh", "Mahetha", "Skandakumar Karttikeyan"],
    Squad45: ["Anshul baddi", "Kavinisha", "Ananya Y Deshmane", "Ayden", "Anderson", "Shreya Sreenivasa", "Veditraghav Sairi", "Akhilan Ashok", "Anirudh Ganesan", "Abhinav Ganesan"],
    Squad46: ["Kanika Mathur", "Hanil Das", "K.Edwin anthony", "Saurav Agrawal", "Sindhuja", "John Bruce"],
    Squad47: ["Prince Puthuran", "Mihika kumar", "Advait Sumesh", "nihar", "Maitri Chakraborty", "Saikrishna", "Aadi vaishnav", "Dhruv Vinod", "Rittvik Arrvind"],
    Squad48: ["Eshaan Ali Mashrook", "Saamir", "Thanikan", "Aman Bafna", "Akankshya", "Leena Abigail Dany"],
    Squad49: ["Fathima Zahra", "Siddharth", "Vijay Sathappan Narayanan", "Ashwin", "Ashutosh Patnaik", "Tuvijeet Sharma", "Miruthula Devi", "Shlok", "Shashvati Mahesh Kumar", "Sharvari Mahesh Kumar", "Dhanush S S", "Himansh Ahuja"],
    Squad50: ["Jenika Ann Mathew", "ATMIKHA JEEJU", "Luis Gael Rojo Trejo", "Rishi Gautham", "Avigat Gupta", "Amresh Patnaik", "Anagha N", "Sidharth Sudheer", "Veer Banerjee", "Pinnenti Sreepooja", "Ishaan Kurian", "Aditya Singh", "Sanskriti Amid"],
    Squad51: ["Mahika", "Pranshu", "Vaidehi", "Isha"],
    Squad52: ["Neev", "Aanya M Bafna", "Ajay Prasanth", "Sanchan", "Hriya", "Advik H", "Sharique", "Vani Jain", "Kamlesh Narayanan", "Sakthivelu"]
}
var Student;
var Squad;
var red = ["Shoban", "Anirudh Ganesan", "Akhilan Ashok", "Prince Puthuran", "Nivedita Hanil", "Arav Tikkoo", "Anvi Gupta", "Poorvika Sree", "Kavinisha", "Hiranmayi", "Aditya", "Atharv", "Rittvik Arrvind", "Ayden", "nihar", "Vijay Sathappan Narayanan", "Ashwin", "Shashvati Mahesh Kumar", "Himansh Ahuja", "Neev", "Sanchan", "Hriya", "Nivedita Hanil", "Akshika", "Saamir", "Pranshu", "Rishi Gomathinaygam"];
var blue = ["Eshwar", "Abhinav Ganesan", "Rudra Kumar", "Skandakumar Karttikeyan", "Ananya Y Deshmane", "Advait Sumesh", "Aarya D", "Shreya Sreenivasa", "Maitri Chakraborty", "Tanve", "Mayank", "Eshan venkatesh", "Anderson", "Arya Anand", "Mihika kumar", "Fathima Zahra", "Ashutosh Patnaik", "Miruthula Devi", "Shlok", "Ajay Prasanth", "Advik H", "Sharique", "Vani Jain", "Leena Abigail Dany", "Akankshya", "Mahika", "Vaidehi"];
var green = ["Mahima Sree", "Sukirtha", "lewin anthony joseph E.", "Veditraghav Sairi", "Umang Mathur", "Anshul baddi", "Nenika Majeethia", "Nidhi", "Mahetha", "Kavya Diwan", "Shrreya", "Eshaan Ali Mashrook", "Vaishnav", "Saikrishna", "Siddharth", "Tuvijeet Sharma", "Sharvari Mahesh Kumar", "Dhanush S S", "Aanya M Bafna", "Kamlesh Narayanan", "Sakthivelu", "Aman Bafna", "Thanikan", "Dhruv Vinod", "Isha"];

function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("name").innerHTML = "<option></option>";
    else {
        var squadOptions = "";
        for (squadId in namesBySquad[value]) {
            squadOptions += "<option>" + namesBySquad[value][squadId] + "</option>";
        }
        document.getElementById("name").innerHTML = squadOptions;
    }
}

function displaySelected() {
    Squad = document.getElementById("squad").value;
    Student = document.getElementById("name").value;
    console.log(red.indexOf(Student));
    console.log(blue.indexOf(Student));
    console.log(green.indexOf(Student));
    if (red.indexOf(Student) != -1) {
        location.href = "./red.html";
        console.log(red.indexOf(Student));
        console.log("Red")
        //Remove the alert and give location.href = "./house1.html"
    } else if (blue.indexOf(Student) != -1) {
        //alert(Squad + "\n" + Student + " " + "blue");
        location.href = "./blue.html";
        console.log(blue.indexOf(Student));
        console.log("Blue")
    } else {
        //alert(Squad + "\n" + Student + " " + "green");
        location.href = "./green.html";
        console.log(green.indexOf(Student));
        console.log("Green")
    }
}

function resetSelection() {
    document.getElementById("squad").selectedIndex = 0;
    document.getElementById("name").selectedIndex = 0;
}

function displayBlueTeam() {
    location.href = "./blueTeam.html"
}

function displayRedTeam() {
    location.href = "./redTeam.html"
}

function displayGreenTeam() {
    location.href = "./greenTeam.html"
}