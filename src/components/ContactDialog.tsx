
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Mail, Phone } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const subjects = [
    { value: "don", label: "Faire un don 💝" },
    { value: "benevole", label: "Devenir bénévole 🤝" },
    { value: "entreprise", label: "Partenariat entreprise 🏢" },
    { value: "information", label: "Demande d'information ℹ️" },
    { value: "autre", label: "Autre 📝" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="font-dm-sans font-bold text-2xl text-gray-900 tracking-tight leading-relaxed">
              Contactez-nous
            </DialogTitle>
            <p className="font-dm-sans text-gray-600 text-sm tracking-tight leading-relaxed mt-2">
              Nous sommes là pour répondre à toutes vos questions
            </p>
          </div>
        </DialogHeader>

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
            <Label htmlFor="subject" className="font-dm-sans font-medium text-gray-700 tracking-tight">
              Sujet *
            </Label>
            <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
              <SelectTrigger className="rounded-2xl border-gray-200 font-dm-sans tracking-tight">
                <SelectValue placeholder="Choisissez un sujet" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.value} value={subject.value} className="font-dm-sans tracking-tight">
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-dm-sans font-medium text-gray-700 tracking-tight">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="rounded-2xl border-gray-200 focus:border-primary font-dm-sans tracking-tight resize-none"
              rows={4}
              placeholder="Partagez-nous votre message..."
              required
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
        <div className="mt-6 pt-6 border-t border-gray-100">
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
      </DialogContent>
    </Dialog>
  );
};
