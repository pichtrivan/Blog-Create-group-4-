
import Card from "../components/card"

export default function BlogSection() {
  return (
    <section>
      <div className="bg-green-900 bg-opacity-60 text-white text-center py-16 px-4 ">
        <h2 className="text-4xl font-bold mt-6">Blogs</h2>
        <p className="max-w-2xl mx-auto text-lg">
          No matter what kind of traveller you are, we’ve got a tour (or a
          dozen) that'll fit you just right.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
            <Card
              post={{
                image: {
                  url: "https://www.visitsoutheastasia.travel/wp-content/uploads/2022/12/shutterstock_672393745-1024x594.jpg",
                  alt: "Example Image",
                },
                title: "Phnom Kulen National Park",
                name: "Author Name",
                createdAt: "2023-01-01",
              }}
            />
            <Card
              post={{
                image: {
                  url: "https://www.visitsoutheastasia.travel/wp-content/uploads/2022/12/Cambodia-5-1024x683.jpg",
                  alt: "Example Image",
                },
                title: "Koh Rong Island",
                name: "Author Name",
                createdAt: "2023-01-01",
              }}
            />
            <Card
              post={{
                image: {
                  url: "https://cms.siemreaper.click/uploads/angkor_wat_sunrise_tour_cambodia2712_fa7a0ffa75.jpeg",
                  alt: "Example Image",
                },
                title: "Sample Blog Title",
                name: "Author Name",
                createdAt: "2023-01-01",
              }}
            />
      </div>
    </section>
  );
}
