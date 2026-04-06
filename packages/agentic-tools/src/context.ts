import { AsyncLocalStorage } from 'node:async_hooks';

export const contextStore = new AsyncLocalStorage<Record<string, unknown>>();

export function getPluginState(): Record<string, unknown> | undefined {
  return contextStore.getStore();
}
