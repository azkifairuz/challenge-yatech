const { PrismaClient } = require("@prisma/client");
const { responseMessage } = require("../utils/responseHandle");
const prisma = new PrismaClient();

async function functionName(req, res) {
  try {
    const {
      nama,
      idPasien,
      tanggal,
      keluhan,
      resep,
      biaya,
      usesInsurance,
      insuranceName,
      coveredCost,
    } = req.body;
    if (!nama || !tanggal || !keluhan || !resep || !biaya) {
      return responseMessage(res, 400, "field tidak boleh kosong", false);
    }
    const result = await prisma.patient.create({
      data: {
        id: idPasien,
        namaPasien: nama,
        tanggalPengobatan: tanggal,
        ResepObat: resep,
        Biaya: biaya,
        usesInsurance: usesInsurance,
        insuranceName: insuranceName,
        coveredCost: coveredCost,
      },
    });

    return responseMessage(res, 200, "input data berhasil", false);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return responseMessage(
      res,
      500,
      `Terjadi kesalahan saat input data: ${error}`,
      false
    );
  }
}
