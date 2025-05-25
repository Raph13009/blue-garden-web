
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Heart, Users } from "lucide-react";

const CourseDesHeros = () => {
  const eventDetails = {
    title: "Course des Héros",
    subtitle: "Un événement inspirant",
    date: "15 juin 2025",
    location: "Domaine de Saint-Cloud",
    image: "/lovable-uploads/c4e0b46f-5575-4267-866c-a185fdd9ca38.png",
  };

  const sections = [
    {
      icon: Trophy,
      title: "Défi sportif",
      description: "Choix des parcours adaptés à tous les niveaux",
      details: [
        "Course 5km - Accessible à tous 🏃‍♀️",
        "Course 10km - Pour les sportifs confirmés 🏃‍♂️",
        "Marche solidaire 2km - En famille 👨‍👩‍👧‍👦",
        "Course enfants 500m - Dès 6 ans 🧒",
      ],
      color: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Ambiance festive",
      description: "Une journée de joie et de partage inoubliable",
      details: [
        "Animation musicale tout au long de l'événement 🎵",
        "Stand de maquillage pour enfants 🎨",
        "Photobooth solidaire avec accessoires 📸",
        "Remise des prix et tombola 🎁",
      ],
      color: "from-pink-100 to-rose-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Users,
      title: "Mobilisation solidaire",
      description: "Ensemble pour une cause qui nous unit",
      details: [
        "100% des inscriptions reversées à nos actions ❤️",
        "Objectif : 10 000€ collectés pour nos missions 🎯",
        "Parrainage d'entreprises partenaires 🤝",
        "Sensibilisation aux causes humanitaires 🌍",
      ],
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section id="course" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Image */}
          <div className="text-center mb-16">
            <h2 className="font-dm-sans font-bold text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight leading-relaxed">
              {eventDetails.title} 🏃‍♀️
            </h2>
            <p className="font-dm-sans font-medium text-xl md:text-2xl text-primary mb-8 tracking-tight leading-relaxed">
              {eventDetails.subtitle}
            </p>
            
            {/* Event Info Card */}
            <Card className="mb-12 overflow-hidden rounded-3xl shadow-2xl border-0">
              <div className="relative h-64 md:h-80">
                <img
                  src={eventDetails.image}
                  alt="Course des Héros"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-secondary" />
                      <span className="font-dm-sans font-bold text-xl tracking-tight leading-relaxed">
                        {eventDetails.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-secondary" />
                      <span className="font-dm-sans font-bold text-xl tracking-tight leading-relaxed">
                        {eventDetails.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Three Main Sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      <section.icon className={`w-8 h-8 ${section.iconColor}`} />
                    </div>
                    <h3 className="font-dm-sans font-bold text-xl text-gray-900 tracking-tight leading-relaxed">
                      {section.title}
                    </h3>
                    <p className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed mt-2">
                      {section.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3">
                    {section.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-dm-sans text-gray-700 text-sm tracking-tight leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Registration Section */}
          <div className="text-center">
            <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-primary via-purple-600 to-accent shadow-2xl">
              <CardContent className="p-8 md:p-12 text-white">
                <h3 className="font-dm-sans font-bold text-3xl md:text-4xl mb-6 tracking-tight leading-relaxed">
                  Rejoindre l'équipe Blue-Garden 🏆
                </h3>
                <p className="font-dm-sans text-lg md:text-xl mb-8 tracking-tight leading-relaxed opacity-90 max-w-3xl mx-auto">
                  Participez à cet événement exceptionnel et contribuez à changer la vie de nombreuses personnes. Chaque pas compte, chaque participation fait la différence !
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="font-dm-sans font-bold text-2xl mb-2 tracking-tight leading-relaxed">
                      500+
                    </div>
                    <div className="font-dm-sans text-sm tracking-tight leading-relaxed opacity-80">
                      Participants attendus
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="font-dm-sans font-bold text-2xl mb-2 tracking-tight leading-relaxed">
                      10K€
                    </div>
                    <div className="font-dm-sans text-sm tracking-tight leading-relaxed opacity-80">
                      Objectif de collecte
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="font-dm-sans font-bold text-2xl mb-2 tracking-tight leading-relaxed">
                      4
                    </div>
                    <div className="font-dm-sans text-sm tracking-tight leading-relaxed opacity-80">
                      Parcours disponibles
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-gray-900 font-dm-sans font-medium rounded-2xl px-8 py-4 text-lg tracking-tight leading-relaxed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Rejoindre l'équipe Blue-Garden 🏃‍♀️
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 font-dm-sans font-medium rounded-2xl px-8 py-4 text-lg tracking-tight leading-relaxed"
                  >
                    Télécharger le programme 📄
                  </Button>
                </div>

                <p className="font-dm-sans text-sm mt-6 tracking-tight leading-relaxed opacity-80">
                  Inscription ouverte jusqu'au 1er juin 2025 • Tarifs préférentiels jusqu'au 15 avril
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDesHeros;
