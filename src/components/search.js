import React, { useState } from "react";
import "./Search.css";
import aegis from "./Data.json";
import wonyoung from "./img/wonyoung.jpg";
import { Container, Image } from "react-bootstrap";
import TextInput from "./components/textinput";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default function Search() {
    const [keyword, setKeyword] = useState("");
    return (
        <div className="App">
            <Container>
                <h1 className="text-center">Kelompok 08</h1>
                <h1 className="text-center">Pencarian data OnkeyUp</h1>
                <TextInput
                    type="text"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    placeholder="Masukkan NIM"
                />
                {aegis
                    .filter((post) => {
                        if (keyword === "") {
                            return null;
                        } else if (post.nim == keyword) {
                            return post;
                        }
                    })
                    .map((post) => (
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-5">
                                <Card key={post.nim}>
                                    <Card.Body>
                                        <Card.Title>{post.nama_lengkap}</Card.Title>
                                        <div
                                            className="text-center"
                                            style={{
                                                textAlign: "start",
                                            }}
                                        >
                                            <Image
                                                src={wonyoung}
                                                style={{
                                                    textAlign: "center",
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "contain",
                                                }}
                                                alt="wonyoung"
                                                class="img-responsive center-block"
                                                rounded="true"
                                            />
                                        </div>
                                        <Card.Text>
                                            Nama Panggilan : {post.nama_panggilan}
                                        </Card.Text>
                                        <Card.Text>NIM : {post.nim}</Card.Text>
                                        <Card.Text>TTL : {post.tanggal_lahir}</Card.Text>
                                        <Card.Text>Hobi : {post.hobi}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <FontAwesomeIcon icon={faEnvelope} /> {post.email}
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faLine} /> @{post.id_line}
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    ))}
            </Container>
        </div>
    );
}
