function Calculate()
{
    let iAssignments = $("#Assignments").val();
    let iGroupProjects = $("#Groupprojects").val();
    let iQuizzes = $("#Quizzes").val();
    let iExams = $("#Exams").val();
    let iIntex = $("#Intex").val();
    let iAW = 50;
    let iGPW = 10;
    let iQW = 10;
    let iEW = 20;
    let iIW = 10;

    iAssignments = iAssignments / 100;
    iGroupProjects = iGroupProjects / 100;
    iQuizzes = iQuizzes / 100;
    iExams = iExams / 100;
    iIntex = iIntex / 100;

    let iTotalA = iAW * iAssignments;
    let iTotalGP = iGPW * iGroupProjects;
    let iTotalQ = iQW * iQuizzes;
    let iTotalE = iEW * iExams;
    let iTotalI = iIW * iIntex;

    let GrandTotal = iTotalA + iTotalGP + iTotalQ + iTotalE + iTotalI;
    let sLetter = "";

    let sA = "A";
    let sAm = "A-";
    let sBp = "B+";
    let sB = "B";
    let sBm = "B-";
    let sCp = "C+";
    let sC = "C";
    let sCm = "C-";
    let sDp = "D+";
    let sD = "D";
    let sDm = "D-";
    let sE = "E";

    if (GrandTotal >= 94) {
        sLetter = sA;
    }
    else if (GrandTotal >= 90) {
        sLetter = sAm;
    }
    else if (GrandTotal >= 87) {
        sLetter = sBp;
    }
    else if (GrandTotal >= 84) {
        sLetter = sB;
    }
    else if (GrandTotal >= 80) {
        sLetter = sBm;
    }
    else if (GrandTotal >= 77) {
        sLetter = sCp;
    }
    else if (GrandTotal >= 74) {
        sLetter = sC;
    }
    else if (GrandTotal >= 70) {
        sLetter = sCm;
    }
    else if (GrandTotal >= 67) {
        sLetter = sDp;
    }
    else if (GrandTotal >= 64) {
        sLetter = sD;
    }
    else if (GrandTotal >= 60) {
        sLetter = sDm;
    }
    else {
        sLetter = sE
    }

    let sOutput = GrandTotal + " % " + sLetter;

    alert(sOutput);
}