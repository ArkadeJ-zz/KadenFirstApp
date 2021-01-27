using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KadenFirstApp.Models
{
    public class GradesModel{
        [Required]
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public int Groupprojects { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public int Exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Grade Percentage must be between 0% and 100%")]
        public int Intex { get; set; }
    }
}
