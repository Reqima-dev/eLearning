import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Un certificat sera-t-il délivré pour chaque cours suivi ?
        </AccordionTrigger>
        <AccordionContent>
          Oui — chaque étudiant qui termine un cours recevra un certificat
          d&apos;achèvement attestant de sa compétence. Nous encourageons les
          étudiants à les inclure sur leurs profils LinkedIn et dans leurs
          candidatures !
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Puis-je poser des questions sur un cours ou obtenir de l&apos;aide si
          mon code ne fonctionne pas ?
        </AccordionTrigger>
        <AccordionContent>
          Oui, vous pouvez déposer vos problèmes rencontrés, en cliquant sur la
          fonctionnalité Problèmes et vous remplissez le formulaire et vous
          envoyez. Nous essaierons toujours de répondre à votre demande et de
          résoudre tout problème que vous pourriez rencontrer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Puis-je télécharger des vidéos de cours ?
        </AccordionTrigger>
        <AccordionContent>
          Pour des raisons de sécurité, les vidéos de cours ne peuvent pas être
          téléchargées. Cependant, vous avez un accès à vie à chaque cours
          acheté et pouvez les regarder à tout moment et en tout lieu avec votre
          compte.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Puis-je obtenir le code source de chaque cours de Programmation
          informatique ?
        </AccordionTrigger>
        <AccordionContent>
          Oui - Vous obtiendrez le code source de tous les cours lorsque vous
          regarderez la vidéo du cours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
