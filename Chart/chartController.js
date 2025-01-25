const Chart =require("./chartSchema")

exports.creatChart=async(req,res)=>{
    const data=req.body
    try {
        const newChart =new Chart(data)
        const savedChart=await newChart.save()
        res.status(201).json(savedChart)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.getCharts = async (req, res) => {
    try {
        const charts = await Chart.find();
        res.status(200).json(charts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};