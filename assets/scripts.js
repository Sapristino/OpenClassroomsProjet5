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

    const localBusinessData = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Nina Carducci",
        "image": "https://sapristino.github.io/OpenClassroomsProjet5/assets/images/nina.webp",
        "telephone": "05 56 67 78 89",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "68 avenue Alsace Lorraine",
          "addressLocality": "Bordeaux",
          "addressRegion": "Aquitaine",
          "addressCountry": "FR",
          "postalCode": "33200"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "http://schema.org/Monday",
          "opens": "10:00",
          "closes": "19:00"
        },
        "priceRange": "€€",
        "service": [
          {
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
          }
        ]
      };
      
    const LocalBusinessscript = document.createElement('script');
    LocalBusinessscript.type = 'application/ld+json';
    LocalBusinessscript.text = JSON.stringify(localBusinessData);
    document.querySelector('head').appendChild(LocalBusinessscript);
});
