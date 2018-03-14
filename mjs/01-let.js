/**
 * Created by TruongDX on 3/9/2018.
 */
let courseWeb       = ["HTML", "CSS", "Typescript"];
let courseMobile    = ["iOS", "Android"];
let coursePhp       = ["Zend", "Wordpress", "PHP"];

let course = ["HTML", "CSS" , ...courseMobile, "Typescript", ...courseMobile, ...coursePhp];
console.log(course);