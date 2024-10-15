export type EmailAddress = {
  email_address: string;
  id: string;
  linked_to: [];
  object: string;
  verification: {
    status: string;
    strategy: string;
  };
};
