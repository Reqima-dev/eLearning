import { Button } from "@/components/ui/button.tsx";
import { ProblemsDescriptionForm } from "./_components/problems-description-form.tsx";
import { ProblemsForm } from "./_components/problems-title-form.tsx";


const CreatePage = () => {
  return (
    <div className="space-y-4 p-6">
      <h3 className="text-3xl font-bold mb-8 text-center text-sky-700">
        Une section pour aider les
        utilisateurs à poser leurs questions.
      </h3>
      <p className="text-center text-gray-700 text-2xl">
        Questions fréquemment posées
      </p>
      <div className="font-bold text-sky-700 text-center p-4 text-3xl">
        Formulaire
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProblemsForm  />
        <ProblemsDescriptionForm />
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="success1">Envoyer</Button>
      </div>
    </div>
  );
};

export default CreatePage;
