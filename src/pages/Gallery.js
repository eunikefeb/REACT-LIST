import React, {Component} from "react";
import $ from "jquery";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            buku: [{ 
                    isbn: "12345",
                    judul: "Dilan 1990",
                    penulis: "Pidi Baiq",
                    penerbit: "Pastel Books",
                    harga: 75000,
                    cover: "https://i.pinimg.com/564x/2c/38/d7/2c38d7b576a1839e0bb60a448091e466.jpg"
                },
                {
                    isbn: "12346",
                    judul: "Dilan 1991",
                    penulis: "Pidi Baiq",
                    penerbit: "Pastel Books",
                    harga: 75000,
                    cover: "https://i.pinimg.com/564x/ab/95/8a/ab958a1428ba7b9b33f0ee071d3bf329.jpg"
                },
                {
                    isbn: "12346",
                    judul: "Milea",
                    penulis: "Pidi Baiq",
                    penerbit: "Pastel Books",
                    harga: 75000,
                    cover: "https://i.pinimg.com/474x/bf/20/f2/bf20f2ce4abe6a1cf1f3d87c989de5ec.jpg"
                },
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
        }
        this.state.filterBuku = this.state.buku
    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_buku").show()
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_buku").show()
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }


    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

        // menutup komponen modal_buku
        $("#modal_buku").hide()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempBuku = this.state.buku
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)

            // hapus data
            tempBuku.splice(index, 1)

            this.setState({ buku: tempBuku })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLowerCase().includes(keyword) ||
                    item.penulis.toLowerCase().includes(keyword) ||
                    item.penerbit.toLowerCase().includes(keyword)
            })

            this.setState({ filterBuku: result })
        }
    }

    Close = () =>{
        $("#modal_buku").hide()
    }

    render() {
        return (
            <div className="container"><br />
                <br></br>
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterBuku.map((item, index) => (
                        <Card
                            key={index}
                            judul={item.judul}
                            penulis={item.penulis}
                            penerbit={item.penerbit}
                            harga={item.harga}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>
            <br></br>
            <center><button
            className="btn btn-success"
            onClick={() => this.Add()}
            data-toggle="modal"
            data-target="#modal_buku"
            >
            Tambah Data
            </button></center>
                </div>

        )
    }
}

export default Gallery;