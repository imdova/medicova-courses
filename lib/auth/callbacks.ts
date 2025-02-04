export const callbacks = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async session({ session }: { session: any }) {
    return session;
  },
};
