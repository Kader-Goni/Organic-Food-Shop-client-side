const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProduct] = useState([])
    const [looding, setLooding] = useState(true)

    useEffect(() => {
        fetch("product.json")
        .then(res => res.json())
        .then(data => {
            if(data){
                setProduct(data)
                setLooding(false)
            }
        })
    }, [])

    return [products, setProduct, looding];
}
export default useProducts;