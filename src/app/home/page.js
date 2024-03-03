import "../home.css";

const supercars = [
  { model: 'Bugatti Chiron Super Sport', topSpeedMph: 304, topSpeedKmh: 490, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' },
  { model: 'Hennessey Venom F5', topSpeedMph: '301+', topSpeedKmh: '484+', imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' },
  { model: 'Koenigsegg Agera RS', topSpeedMph: 278, topSpeedKmh: 447, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' },
  { model: 'SSC Tuatara', topSpeedMph: '282+', topSpeedKmh: '454+', imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds' },
];
export default function Home() {
  return (
    <div className="supercarsContainer">
      <main className="mainContent">
        <h1>Supercar Speed Comparison</h1>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Car Model</th>
                <th>Top Speed (mph)</th>
                <th>Top Speed (km/h)</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {supercars.map((car, index) => (
                <tr key={index}>
                  <td>{car.model}</td>
                  <td>{car.topSpeedMph}</td>
                  <td>{car.topSpeedKmh}</td>
                  <td>
                    <img src={car.imageUrl} alt={car.model} className="carImage" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
