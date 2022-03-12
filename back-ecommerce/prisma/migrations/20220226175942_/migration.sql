-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imagen" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administrador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" VARCHAR(300),
    "imagen" TEXT,
    "genero" "Genero" NOT NULL DEFAULT E'OTRO',
    "tipo_producto_id" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tipo_productos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_id_key" ON "usuarios"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "administrador_id_key" ON "administrador"("id");

-- CreateIndex
CREATE UNIQUE INDEX "administrador_correo_key" ON "administrador"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "productos_id_key" ON "productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_id_key" ON "tipo_productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_nombre_key" ON "tipo_productos"("nombre");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_tipo_producto_id_fkey" FOREIGN KEY ("tipo_producto_id") REFERENCES "tipo_productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
