const ServiceCards = [
    {
      title: 'General Consultation',
      description:
        "Our Standard Consultations are 20 minutes long. This is usually enough time to cover a single medical issue or to perform a health check and Vaccination.",
      imageUrl: process.env.PUBLIC_URL + '/assets/general_consultation.jpg',
      time: 1500,
    },
    {
      title: 'Specialist Consultation',
      description:
        'Veterinary specialists are veterinarians who specialize in an area of medicine or a specific animal species. These vet specialists have four years of undergraduate training and four years of veterinary school, just like other veterinarians..',
      imageUrl: process.env.PUBLIC_URL + '/assets/specialist_consultation.jpg',
      time: 1500,
    },
    {
        title: 'Emergencies',
        description:
          'It can be difficult to know when your pet’s health problem is life-threatening and needs emergency treatment. If you are in any doubt, always contact your vet for further advice. We would much rather you rang for advice than sat at home worrying about your pet.',
        imageUrl: process.env.PUBLIC_URL + '/assets/emergencies.jpg',
        time: 1500,
    }

  ];
  
  export default ServiceCards;