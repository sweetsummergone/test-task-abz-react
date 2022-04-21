fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5') 
    .then(res => { 
        return res.json(); 
    }) 
    .then(data => { 
        console.log(data); 
        if (data.success) {
            console.log("cool");
        }
    });
                

/* 

<div class="user">
    <img src="https://static.wikia.nocookie.net/gtawiki/images/8/8d/KentPaul-GTASAde.png" class="user__avatar" />
    <h3 class="user__name">Kent Paul</h3>
    <p class="user__info"><span class="user__position">Manager Malibu Club</span>
        <span class="user__email">kentpaulmalibu@vicecity.gov.us</span>
        <span class="user__phone">+1-800-555-55-55</span>
    </p>
</div>

*/