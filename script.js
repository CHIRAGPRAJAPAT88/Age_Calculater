function calculateAge() {
          const birthDate = new Date(document.getElementById('birthDate').value);
          const currentDate = new Date();

          if(birthDate >= currentDate) {
                    document.getElementById('result').textContent = "Invalid birthdate!";
                    return;
          }

          const ageInMillisecond = currentDate - birthDate;
          const ageInSecond = ageInMillisecond / 1000 ;
          const ageInMinutes = ageInSecond / 60;
          const ageInHours = ageInMinutes / 60 ;
          const ageInDays = ageInHours / 24 ;
          const ageInYears = ageInDays / 365.25 ;

          const years = Math.floor(ageInYears);
          const months = Math.floor((ageInYears - years) * 12);
          const days = Math.floor((ageInYears * 365.25) %  365.25);


          document.getElementById('result').textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;

}