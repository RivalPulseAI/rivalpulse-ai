import { AppProvider, Page, Card } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

export default function Home() {
  return (
    <AppProvider>
      <Page title="RivalPulse AI">
        <Card sectioned>
          <p>Welcome to RivalPulse AI. Your embedded Shopify app is working!</p>
        </Card>
      </Page>
    </AppProvider>
  );
}
