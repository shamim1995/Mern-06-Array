

function Shamim() {

    //gpa calculation

    this.gpa = function (marks) {

        this.gpa;

        if (marks >= 0 && marks <= 32) {
            return gpa = 0;

        } else if (marks >= 33 && marks < 40) {
            return gpa = 1.0;

        } else if (marks >= 40 && marks < 50) {
            return gpa = 2.0;

        } else if (marks >= 50 && marks < 60) {
            return gpa = 3.0;

        } else if (marks >= 60 && marks < 70) {
            return gpa = 3.5;

        } else if (marks >= 70 && marks < 80) {
            return gpa = 4.0;

        } else if (marks >= 80 && marks <= 100) {
            return gpa = 5.0;
        } else {
            return `You are not attend the exam`;
        }
        return gpa;
    }


    //grade calculation


    this.grade = function (gpa) {

        this.grade;
        if (gpa >= 0 && gpa < 1) {
            return grade = 'F'
        } else if (gpa >= 1 && gpa < 2) {

            return grade = 'D'

        } else if (gpa >= 2 && gpa < 3) {
            return grade = 'C'

        } else if (gpa >= 3 && gpa < 3.5) {
            return grade = 'B'

        } else if (gpa >= 3.5 && gpa < 4) {
            return grade = 'A-'

        } else if (gpa >= 4 && gpa < 5) {
            return grade = 'A'

        } else if (gpa >= 5) {
            return grade = 'A+'

        } else {
            return `Your attendence missing`
        }
       

    }

    //cgpa calculation

    this.cgpa = function (bn, en, math, ict, agre, social, rel) {

        this.totalSub = (bn + en + math + ict + agre + social + rel)
        this.totalCal = this.totalSub / 7;
        this.totalResult = this.totalCal.toFixed(2);

        if (bn == 0 || en == 0 || math == 0 || ict == 0 || agre == 0 || social == 0 || rel == 0) {
            return ` You Are Failed`
        } else {
            return ` Your CGPA= ${this.totalResult} & Your GRADE= ${shamim.grade(this.totalResult)} `
        }
    }


}