import { createProvider } from '@builderbot/bot'
import { BaileysProvider } from '@builderbot/provider-baileys'
import QRCode from 'qrcode' // Asegúrate de que esta línea exista si no estaba

export const provider = createProvider(BaileysProvider)

provider.initAuth(async (auth) => {
    console.log('[DEBUG] Iniciando initAuth de BaileysProvider');
    console.log(`[DEBUG] Estado de autenticación: ${auth.status}`);

    if (auth.status === 'qr_received') {
        const QR = await QRCode.toDataURL(auth.qr)
        console.log(`[QR CODE]: ${QR}`) // Aquí debería imprimirse el QR
        console.log('[DEBUG] QR Code generado y loggeado.');
    } else if (auth.status === 'ready') {
        console.log('[DEBUG] Cliente de WhatsApp listo y autenticado.');
    } else if (auth.status === 'not_ready') {
        console.log('[DEBUG] Cliente de WhatsApp no listo.');
    } else {
        console.log(`[DEBUG] Otro estado de autenticación: ${auth.status}`);
    }
})