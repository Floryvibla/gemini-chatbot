import { motion } from "framer-motion";
import Link from "next/link";

import { LogoGoogle, MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <VercelIcon />
          <span>+</span>
          <MessageIcon />
        </p>
        <p>
          Conheça Michel, sua assistente de compras inteligente! Michel ajuda você a encontrar os produtos certos, com sugestões personalizadas e atendimento rápido. Criada com o poder da IA, Michel oferece uma experiência de chat fluida e eficiente para que suas compras sejam mais fáceis e rápidas.
        </p>
        {/* <p>
          Para saber mais sobre a tecnologia por trás da Michel, visite a{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            documentação do AI SDK
          </Link>
          .
        </p> */}
      </div>
    </motion.div>
  );
};
