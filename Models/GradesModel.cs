using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KadenFirstApp.Models
{
    public class GradesModel{
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Groupprojects { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Exams { get; set; }
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public double Intex { get; set; }
    }
}