// Data raket dengan penambahan properti buttonText


const cardData = [
  {
    id: 1,
    title: "Yonex Astrox 99",
    price: 180.0,
    desc: "A racket with Rotational Generator System technology for maximum power and improved control.",
    image: "/images/Rackets.png",
    buttonText: "Buy Now",
  },
  {
    id: 2,
    title: "Li-Ning N7II",
    price: 140.0,
    desc: "A racket with an aerodynamic design and high flexibility, ideal for intermediate players.",
    image: "./images/Rackets.png",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    title: "Victor Thruster K 9900",
    price: 200.0,
    desc: "A racket with powerful performance and excellent control, perfect for aggressive players.",
    image: "./images/Rackets.png",
    buttonText: "Buy Now",
  },
  {
    id: 4,
    title: "Babolat Satelite Gravity 74",
    price: 160.0,
    desc: "A lightweight racket with high precision, perfect for fast-paced games and superior control.",
    image: "./images/Rackets.png",
    buttonText: "Buy Now",
  },
  {
    id: 5,
    title: "Ashaway Phantom X",
    price: 130.0,
    desc: "A racket with an innovative design and advanced technology, offering comfort and power in every shot.",
    image: "./images/Rackets.png",
    buttonText: "Buy Now",
  },
  {
    id: 6,
    title: "Yonex Astrox 88D Pro",
    price: 150.0,
    desc: "A top-tier racket for aggressive players, designed to enhance smash speed and power.",
    image: "./images/Rackets.png",
    buttonText: "Buy Now",
  },
];

// Komponen kartu
const Card = ({ title, desc, image, buttonText }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
    <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
    <h3>{title}</h3>
    <p>{desc}</p> {/* Properti diganti dari description ke desc */}
    <button style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
      {buttonText}
    </button>
  </div>
);

// Komponen utama aplikasi
const App = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          desc={card.desc} // Mengirimkan prop desc ke komponen Card
          image={card.image}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default App;
