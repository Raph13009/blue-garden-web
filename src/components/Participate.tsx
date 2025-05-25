
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Building, Mail, Phone, Gift } from "lucide-react";
import { useState } from "react";

const Participate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participationType: '',
    message: ''
  });

  const participationTypes = [
    { value: "don", label: "Faire un don 💝", icon: Gift, description: "Soutenez nos actions par un don financier" },
    { value: "benevole", label: "Devenir bénévole 🤝", icon: Users, description: "Rejoignez notre équipe de bénévoles" },
    { value: "entreprise", label: "Partenariat entreprise 🏢", icon: Building, description: "Partenariat pour votre entreprise" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-dm-sans font-bold text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight leading-relaxed">
              Faire un don • Participer 🤝
            </h2>
            <p className="font-dm-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-tight leading-relaxed">
              Votre engagement peut transformer des vies. Choisissez la façon dont vous souhaitez nous accompagner dans notre mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Participation Options */}
            <div>
              <h3 className="font-dm-sans font-bold text-2xl text-gray-900 mb-8 tracking-tight leading-relaxed">
                Comment participer ? 🌟
              </h3>
              
              <div className="space-y-6">
                {participationTypes.map((type, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setFormData({...formData, participationType: type.value})}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <type.icon className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-dm-sans font-bold text-lg text-gray-900 mb-2 tracking-tight leading-relaxed">
                            {type.label}
                          </h4>
                          <p className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 border-gray-300 transition-colors duration-300 ${
                          formData.participationType === type.value ? 'bg-primary border-primary' : ''
                        }`}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Donation Buttons */}
              <div className="mt-8">
                <h4 className="font-dm-sans font-bold text-lg text-gray-900 mb-4 tracking-tight leading-relaxed">
                  Don rapide 💝
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[10, 25, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="font-dm-sans font-medium rounded-2xl py-6 hover:bg-primary hover:text-white hover:border-primary transition-colors tracking-tight leading-relaxed"
                    >
                      {amount}€
                    </Button>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white font-dm-sans font-medium rounded-2xl py-4 tracking-tight leading-relaxed">
                  Faire un don sécurisé 🔒
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-dm-sans font-bold text-2xl text-gray-900 tracking-tight leading-relaxed">
                      Contactez-nous
                    </h3>
                    <p className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed mt-2">
                      Nous sommes là pour répondre à toutes vos questions
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-dm-sans font-medium text-gray-700 tracking-tight">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="rounded-2xl border-gray-200 focus:border-primary font-dm-sans tracking-tight"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-dm-sans font-medium text-gray-700 tracking-tight">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="rounded-2xl border-gray-200 focus:border-primary font-dm-sans tracking-tight"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-dm-sans font-medium text-gray-700 tracking-tight">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="rounded-2xl border-gray-200 focus:border-primary font-dm-sans tracking-tight"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="participation" className="font-dm-sans font-medium text-gray-700 tracking-tight">
                        Type de participation *
                      </Label>
                      <Select value={formData.participationType} onValueChange={(value) => setFormData({...formData, participationType: value})}>
                        <SelectTrigger className="rounded-2xl border-gray-200 font-dm-sans tracking-tight">
                          <SelectValue placeholder="Choisissez votre participation" />
                        </SelectTrigger>
                        <SelectContent>
                          {participationTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value} className="font-dm-sans tracking-tight">
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-dm-sans font-medium text-gray-700 tracking-tight">
                        Message (optionnel)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="rounded-2xl border-gray-200 focus:border-primary font-dm-sans tracking-tight resize-none"
                        rows={4}
                        placeholder="Partagez-nous votre motivation ou vos questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium rounded-2xl py-4 text-lg tracking-tight leading-relaxed"
                    >
                      Envoyer votre message 📤
                    </Button>
                  </form>

                  {/* Contact Info */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="grid sm:grid-cols-2 gap-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span className="font-dm-sans text-sm tracking-tight">contact@blue-garden.fr</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span className="font-dm-sans text-sm tracking-tight">06.27.99.75.64</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-16">
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl shadow-lg">
              <CardContent className="p-8 md:p-12">
                <h3 className="font-dm-sans font-bold text-2xl md:text-3xl text-gray-900 text-center mb-8 tracking-tight leading-relaxed">
                  Votre impact en chiffres 📊
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="font-dm-sans font-bold text-3xl text-primary mb-2 tracking-tight">
                      250+
                    </div>
                    <div className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                      Enfants soutenus
                    </div>
                  </div>
                  <div>
                    <div className="font-dm-sans font-bold text-3xl text-accent mb-2 tracking-tight">
                      50+
                    </div>
                    <div className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                      Familles aidées
                    </div>
                  </div>
                  <div>
                    <div className="font-dm-sans font-bold text-3xl text-secondary mb-2 tracking-tight">
                      15K€
                    </div>
                    <div className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                      Collectés cette année
                    </div>
                  </div>
                  <div>
                    <div className="font-dm-sans font-bold text-3xl text-primary mb-2 tracking-tight">
                      100+
                    </div>
                    <div className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed">
                      Bénévoles actifs
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participate;
