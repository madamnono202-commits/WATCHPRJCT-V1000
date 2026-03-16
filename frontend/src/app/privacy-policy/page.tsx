import { getStaticPage } from "@/lib/content";
import { renderContent, getSchemaFromPage, getMetadataFromPage } from "@/lib/contentRenderer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SchemaMarkup from "@/components/content/SchemaMarkup";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = getStaticPage("privacy-policy");
  if (!page) return { title: "Privacy Policy" };
  return getMetadataFromPage(page);
}

export default async function PrivacyPolicyPage() {
  const page = getStaticPage("privacy-policy");
  if (!page) return <div className="max-w-3xl mx-auto px-4 py-8"><p>Page not found.</p></div>;

  const htmlContent = await renderContent(page);
  const schema = getSchemaFromPage(page);

  return (
    <>
      {schema && <SchemaMarkup schema={schema} />}

      <section className="bg-navy-dark text-white py-16 md:py-24 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[350px] h-[350px] bg-gold/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-white tracking-[-0.02em]">
            Privacy Policy
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </div>
    </>
  );
}
