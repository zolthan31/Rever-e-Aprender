import React from 'react';

import { Link } from 'react-router-dom';

import { FaWhatsapp, FaChevronLeft } from "react-icons/fa";
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/school-map.css';
import mapMarkerImg from '../images/logo2.png';

export default function SchoolMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="rever e aprender" />

                    <h2>O melhor reforço escolar da cidade velha</h2>

                    <h4>Estamos esperando!
                        <strong> 98807-4549 </strong>  <FaWhatsapp  size={20} color="white" />
                    </h4>
                </header>

                <footer>
                    <strong>Belém</strong>
                    <span>Pará</span>
                </footer>
            </aside>


            <MapContainer
                center={[-1.4675054, -48.5087219]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </MapContainer>
            <Link to="" className="create-school">
                <FaChevronLeft size={32} color="rgba(0, 0, 0, 0.6)" />

            </Link>

        </div>
    );
}