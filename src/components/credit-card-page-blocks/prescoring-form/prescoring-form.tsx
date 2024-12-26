import { Form } from "@components/ui/form";
import { FORM_ITEMS } from "./prescoring-form-items.const";
import { DEFAULT_VALUES } from "./prescoring-form-items.const";
import { Button } from "@components/ui";

export const PrescoringForm = () => {
  return (
    <Form
      data={FORM_ITEMS}
      defaultValues={DEFAULT_VALUES}
      button={<Button type="submit">Continue</Button>}
    />
  );
};
