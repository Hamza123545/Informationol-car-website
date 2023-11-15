function changeCity(selectedLocation) {
    var iframe = document.getElementById("map_iframe");

    // Define the map address for each location
    var mapUrls = {
        "Karachi": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7088400576!2d66.49600118540117!3d25.19298377106345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697576899852!5m2!1sen!2s",
        
        "Lahore": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.24053775764!2d74.1692368233091!3d31.48283434245836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697583425201!5m2!1sen!2s",
       
        "Islamabad": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.59834205394!2d72.92095587983081!3d33.61600651251259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697583555756!5m2!1sen!2s",
       
        "Peshawar": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211750.24186934283!2d71.40031819218568!3d33.97718274067142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697583609626!5m2!1sen!2s",
       
        "Quetta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220758.21487587993!2d66.85353606407465!3d30.170077131376505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de34ca7faae9%3A0x4696d44c4b6ff197!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697583654698!5m2!1sen!2s",
    };

    // Set the iframe src to the selected location's map URL
    iframe.src = mapUrls[selectedLocation];
}