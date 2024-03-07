$(document).ready(function() {
    // Initialisation de la galerie
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

    // Script JSON-LD pour définir les informations de la personne pour Schema.org
    const personData = {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Nina Carducci",
        "url": "https://www.votresite.com",
        "image": "https://www.votresite.com/assets/images/nina.webp",
        "description": `Nina Carducci est une photographe passionnée basée à Bordeaux. 
        Son travail consiste à capturer des moments précieux avec créativité et sensibilité, 
        en immortalisant les émotions, les lieux et les moments les plus importants de la vie de ses clients. 
        Son approche artistique unique permet de créer des souvenirs inoubliables et de partager des moments de bonheur 
        et de tendresse à travers ses photographies.`
    };

    // Définition des informations sur les services pour Schema.org
    const serviceData = [
        {
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": "Shooting photo",
            "description": "Pour capturer vos moments les plus précieux et garder un souvenir impérissable.",
            "provider": {
                "@type": "Person",
                "name": "Nina Carducci"
            },
            "offers": {
                "@type": "Offer",
                "price": "350€/demi journée",
                "priceCurrency": "EUR"          
            }
        },
        {
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": "Retouches",
            "description": "Vous souhaitez retoucher vos photos pour un résultat professionnel ? Bénéficier d’un rendu optimal pour vos publications.",
            "provider": {
                "@type": "Person",
                "name": "Nina Carducci"
            },
            "offers": {
                "@type": "Offer",
                "price": "50€/photo",
                "priceCurrency": "EUR"          
            }
        },
        {
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": "Album photos",
            "description": "Partagez avec vos proches et vos clients les photos des moments partagés ensemble à travers un album photo personnalisé.",
            "provider": {
                "@type": "Person",
                "name": "Nina Carducci"
            },
            "offers": {
                "@type": "Offer",
                "price": "400€ album A4",
                "priceCurrency": "EUR"
            }
        },
    ];
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(personData);
    document.querySelector('head').appendChild(script);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(serviceData);
    document.querySelector('head').appendChild(serviceScript);
});