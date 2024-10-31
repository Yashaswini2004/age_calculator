document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const date = new Date(document.getElementById("dob").value);
    const today = new Date();
    
    if (!isNaN(date)) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let diffYear = today.getFullYear() - year;
        let diffMonth = today.getMonth() + 1 - month;
        let diffDay = today.getDate() - day;

        // Adjust year and month if birth date hasn't occurred this year
        if (diffMonth < 0 || (diffMonth === 0 && diffDay < 0)) {
            diffYear--;
            diffMonth += 12;
        }
        
        // Adjust days if day difference is negative
        if (diffDay < 0) {
            diffMonth--;
            const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            diffDay += daysInLastMonth;
        }

        // Display the result
        document.getElementById("result").innerHTML = 
            `${diffYear} Years, ${diffMonth} Months, ${diffDay} Days.`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid Date of Birth.";
    }
    });
    