function ValidateContactForm()
{
    var name = document.ContactForm.Name;
    var email = document.ContactForm.email;
    var password = document.ContactForm.password;
    
    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (password.value == "")
    {
        window.alert("Please enter a Password.");
        name.focus();
        return false;
    }

    
    return true;
}