// @@@SNIPSTART money-transfer-project-template-ts-constants
export const namespace = 'default';
export const taskQueueName = 'money-transfer';

export const namespaceV2 = 'defautl.v2';
export const taskQueueNameV2 = 'sleeping';
// @@@SNIPEND

// @@@SNIPSTART money-transfer-project-template-ts-shared

export type PaymentDetails = {
  amount: number;
  sourceAccount: string;
  targetAccount: string;
  referenceId: string;
};

// @@@SNIPEND
