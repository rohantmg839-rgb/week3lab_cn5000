const dateofBirth="08/05/2002"
const getStudentName= () =>
{
   return "Rohan" 
}
const getCampusName= () =>
{
    return ("UEL Campus")
}
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob= dateofBirth
exports.Studentgrade=(marks)=>
{
    if(marks>50 && marks<70)return ("B Grade")
        else
    return("A Grade")
}