"use client"

import type React from "react"

import { useState, useEffect, memo, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, Info, AlertCircle, ChevronUp, Copy, Check, Eye } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

// CSS base original
const originalCss = `/* @import "./themes/slim/slim-imports.scss"; */

:root body#custom-theme.theme {
  --black-font: "Montserrat-Black";
  --black-italic-font: "Montserrat-BlackItalic";
  --bold-font: "MontSerrat-Bold";
  --bold-italic-font: "Montserrat-BoldItalic";
  --extra-bold-font: "MontSerrat-ExtraBold";
  --extra-bold-italic-font: "Montserrat-ExtraBoldItalic";
  --extra-light-font: "Montserrat-ExtraLight";
  --extra-light-italic-font: "Montserrat-ExtraLightItalic";
  --italic-font: "Montserrat-Italic";
  --light-font: "MontSerrat-Light";
  --light-italic-font: "Montserrat-LightItalic";
  --medium-font: "MontSerrat-Medium";
  --medium-italic-font: "Montserrat-MediumItalic";
  --regular-font: "MontSerrat-Regular";
  --semi-bold-font: "MontSerrat-SemiBold";
  --semi-bold-italic-font: "Montserrat-SemiBoldItalic";
  --thin-font: "Montserrat-Thin";
  --thin-italic-font: "Montserrat-ThinItalic";
  --museosans-100: "MuseoSans-100";
  --gutenberg: "Gutenberg";

  /* VARIAVEIS para alteração dos cores do cliente */
  --primary-color: #44322a; /* Rodape, Botões, icones e valores. */
  --Category-bar-color: #44322a; /* Barra lateral de categorias */
  --font-category-static: #ffffff; /* Fonte da barra de categoria */
  --font-category-selected: #000000; /* Fonte da barra de categoria quando clicada */
  --category-selected-bg: #ffffff; /* Fundo das Categorias quando selecionadas */

/* Não alterar */
  --primary-auxiliary-color: #ffffff;
  --secondary-color: #c0c0c0;
  --secondary-auxiliary-color: #000000;
  --fidelity-bar-font-color: #202020;
  --fidelity-bar-bg-color: rgba(255, 187, 51, 0.5);
  --product-card-background-color: #ffffff;

  /* VARIAVEIS ESPECIFICAS PARA PARTES DO SISTEMA */
  --price: var(--primary-color);
  --product-name: var(--dark-color);
  --product-substep-description: var(--primary-color);
  --subcategory-products-name: var(--gray-auxiliary-color);
  --footer-cart-inner-color: var(--primary-color);
  --footer-cart-inner-font-color: var(--primary-auxiliary-color);
  --quantity-in-cart-bg: var(--primary-color);
  --quantity-in-cart-font: var(--primary-auxiliary-color);
  --summary-title-color: var(--primary-color);
  --category-menu-list-bg: var(--Category-bar-color);
  --category-menu-list-font: var(--font-category-static);
  --category-menu-list-selected-bg: var(--category-selected-bg);
  --category-menu-list-selected-font: var(--font-category-selected);
  --choose-where-eat-bg-color: var(--primary-auxiliary-color);
  --choose-where-eat-font-color: var(--primary-color);
  --sub-category-selected-color: var(--gray-auxiliary-color);
  --action-button-bg-color: var(--primary-color);
  --action-button-font-color: var(--primary-auxiliary-color);
  --admin-bg-color: var(--primary-color);
  --back-button-bg-color: var(--white-auxiliary-color);
  --back-button-font-color: var(--dark-color);
  --home-button-bg-color: var(--primary-color);
  --select-option-card-checkbox-border-color: var(--primary-color);
  --select-option-card-checkbox-bg-color: var(--primary-color);
  --select-option-card-checkbox-check-color: var(--primary-auxiliary-color);
  --select-option-card-border-checked-color: var(--primary-color);
  --close-purchase-suggestion-button-bg: var(--primary-color);
  --close-purchase-suggestion-button-font: var(--primary-auxiliary-color);
  --cart-button-bg-color: var(--primary-color);
  --cart-button-font-color: var(--primary-auxiliary-color);
  --cart-list-button-bg-color: var(--primary-color);
  --cart-list-button-font-color: var(--primary-auxiliary-color);
  --accordion-btn-action-bg-color: var(--primary-color);
  --accordion-btn-action-font-color: var(--primary-auxiliary-color);
  --header-bg-color: var(--primary-color);
  --marker-bg-color: var(--primary-color);
  --coupon-remove-button-bg-color: var(--primary-color);
  --coupon-remove-button-font-color: var(--primary-auxiliary-color);
  --fidelity-loader-color: var(--primary-color);
  --sidebar-cart-inner-opened-footer-actions-button-bg-color: var(
    --primary-color
  );
  --admin-actions-loader-color: var(--primary-color);
  --last-orders-loader-color: var(--primary-color);
  --category-menu-list-category-border-color: var(--primary-color);
  --fidelity-cashback-toggle-selected-bg: var(--primary-color);
  --fidelity-cashback-toggle-selected-font: var(--primary-auxiliary-color);
  --tipping-option-active-bg: var(--primary-color);
  --tipping-option-active-font: var(--primary-auxiliary-color);
  --modal-close-button-bg-color: var(--primary-color);
  --navigation-selector-counter-bg-color: var(--primary-color);
  --navigation-selector-counter-font-color: var(--primary-auxiliary-color);
  --navigation-selector-expanded-bg-color: var(--primary-color);
  --purchase-suggestion-scroll-button-bg: var(--primary-color);
  --purchase-suggestion-scrollbar-thumb-bg: var(--primary-color);
  --cart-list-toogle-options-font-color: var(--primary-color);
  --plus-and-minus-button-bg-color: var(--primary-color);
  --plus-and-minus-button-font-color: var(--primary-auxiliary-color);
  --select-option-card-score-bg-color: var(--primary-color);
  --select-option-card-score-font-color: var(--primary-auxiliary-color);
  --select-product-control-button-continue-background-color: var(
    --primary-color
  );
  --select-product-control-button-continue-font-color: var(
    --primary-auxiliary-color
  );
  --modal-product-button-background-color: var(--primary-color);
  --modal-product-button-font-color: var(--primary-auxiliary-color);
  --home-actions-button-background-color: var(--primary-color);
  --home-actions-button-font-color: var(--primary-auxiliary-color);
  --details-header-font-color: var(--dark-color);
  --details-position-indicator-active-bg: var(--primary-color);
  --details-review: var(--primary-color);
  --details-review-button-bg-color: var(--primary-color);
  --details-review-button-font-color: var(--primary-auxiliary-color);
  --fidelity-bar-bt-color: var(--gray-auxiliary-color);
  --fidelity-bar-bt-bg-color: var(--white-auxiliary-color);

  /* VARIAVEIS DE CORES, NORMALMENTE NÃO SÃO ALTERADAS */
  --continue-button-bg-color: #339900;
  --new-orde-button-bg-color: #2e6499;
  --details-error-button-color: #dddddd;
  --background-color-get-digital-recepit: #f5f5f5;
  --screen-input-cupom-code-bg-color: #fff;
  --sumary-discount-color: #da0000;
  --assisted-payment-bar-bg-color: #edff3a;
  --used-payments-color: #a3a3a3;
  --terms-of-use-bg-color: #fff;
  --terms-of-use-content-color: #fff;
  --white-auxiliary-color: #ffffff;
  --gray-auxiliary-color: #202020;
  --gray-dark-color: #707070;
  --gray-color: #949494;
  --gray-light-color: #d3d3d3;
  --successful-color: #4caf50;
  --error-color: #cc2929;
  --red: #ff0000;
  --green: #18a222;
  --attention-color: #e6c317;
  --dark-color: #000000;
  --weak-black: #00000086;
  --green-auxiliary-color: #5fa770;

  --background: transparent linear-gradient(180deg, #fff 0%, #fff 100%) 0% 0%
    no-repeat padding-box;

  --background-color-selfcheckout: #f7f7f7;
  --green-weak: #dfffee;
  --green: #009e4a;
  --border-button-color: #8d8d8d45;

  --common-border-radius: 1.5vmin;
  --common-border-radius-just-left: 1.5vmin 0 0 1.5vmin;
  --common-border-radius-just-right: 0 1.5vmin 1.5vmin 0;

  --common-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  --common-filter-drop-shadow: drop-shadow(
    0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)
  );
  --admin-change-virtual-device-identification-bg-color: var(
    --white-auxiliary-color
  );
  --admin-change-virtual-device-identification-font-color: var(
    var(--gray-auxiliary-color)
  );
  --menu-selfcheckout-bg-color: var(--white-auxiliary-color);
  --menu-selfcheckout-font-color: var(--dark-color);
  --menu-selfcheckout-selected-bg-color: var(--primary-color);
  --menu-selfcheckout-selected-font-color: var(--white-auxiliary-color);

  --classic: flex;
  --slim: none;
}

/* Exemplo de cor para fidelidade */
:root body#custom-theme.theme-fidelidade {
  /* VARIAVEIS PRIMARIAS E SECUNDARIAS */
  --primary-color: #b40000;
  --primary-auxiliary-color: #ffffff;
  --secondary-color: #b40000;
  --secondary-auxiliary-color: #ffffff;
}

:root body#custom-theme.theme app-method header h1 {
  color: var(--dark-color);
}

.category {
  border: solid var(--Category-bar-color);
}
.content-categories.center {
  background: var(--Category-bar-color);
}

:root body#custom-theme.theme .phone,
:root body#custom-theme.theme .tablet,
:root body#custom-theme.theme .totem,
:root body#custom-theme.theme .phone-classic,
:root body#custom-theme.theme .phone-slim,
:root body#custom-theme.theme .tablet-slim,
:root body#custom-theme.theme .tablet-classic,
:root body#custom-theme.theme .totem-slim,
:root body#custom-theme.theme .totem-classic {
  display: none;
}


@media screen and (max-width: 992px) and (orientation: portrait) {
  :root body#custom-theme.theme .phone {
    display: flex;
  }
  :root body#custom-theme.theme .phone-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .phone-slim {
    display: var(--slim);
  }
}

@media screen and (orientation: landscape) {
  :root body#custom-theme.theme .tablet {
    display: flex;
  }
  :root body#custom-theme.theme .tablet-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .tablet-slim {
    display: var(--slim);
  }
}

@media screen and (min-width: 992px) and (orientation: portrait) {
  :root body#custom-theme.theme .totem {
    display: flex;
  }
  :root body#custom-theme.theme .totem-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .totem-slim {
    display: var(--slim);
  }
}`

// Variáveis que podem ser alteradas
const variableDefinitions = [
  {
    name: "--primary-color",
    label: "Rodape, Botões, icones e valores",
    defaultValue: "#44322a",
    description: "Define a cor principal usada em rodapés, botões e elementos de destaque",
  },
  {
    name: "--Category-bar-color",
    label: "Barra lateral de categorias",
    defaultValue: "#44322a",
    description: "Define a cor de fundo da barra lateral de categorias",
  },
  {
    name: "--font-category-static",
    label: "Fonte da barra de categoria",
    defaultValue: "#ffffff",
    description: "Define a cor do texto nas categorias não selecionadas",
  },
  {
    name: "--font-category-selected",
    label: "Fonte da barra de categoria quando clicada",
    defaultValue: "#000000",
    description: "Define a cor do texto nas categorias selecionadas",
  },
  {
    name: "--category-selected-bg",
    label: "Fundo das Categorias quando selecionadas",
    defaultValue: "#ffffff",
    description: "Define a cor de fundo das categorias quando estão selecionadas",
  },
]

// Componente para visualização de cores - Agora baseado na imagem de referência
const RestaurantPreview = memo(({ colors }: { colors: Record<string, string> }) => {
  return (
    <div className="flex flex-col bg-white" style={{ width: "100%" }}>
      {/* Logo - Agora com cor fixa */}
      <div
        className="p-4 flex justify-center"
        style={{
          backgroundColor: "#333333", // Cor fixa para o banner
        }}
      >
        <div className="text-center">
          <span className="font-serif italic text-2xl text-white">Sabor & Arte</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-1">
        {/* Barra lateral de categorias - Agora mais larga */}
        <div className="w-[200px] flex-shrink-0">
          <div
            className="p-3 text-center text-sm"
            style={{
              backgroundColor: colors["--category-selected-bg"] || "#ffffff",
              color: colors["--font-category-selected"] || "#000000",
            }}
          >
            Pratos Principais
          </div>
          {["Entradas", "Saladas", "Massas", "Sobremesas", "Bebidas", "Especiais"].map((category) => (
            <div
              key={category}
              className="p-3 text-center text-sm"
              style={{
                backgroundColor: colors["--Category-bar-color"] || "#44322a",
                color: colors["--font-category-static"] || "#ffffff",
              }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Área de conteúdo */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-medium mb-4">Pratos Principais</h2>

          {/* Grid de produtos */}
          <div className="grid grid-cols-2 gap-4">
            {/* Produto 1 */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden mb-2">
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Filé Mignon ao Molho Madeira"
                  width={250}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-medium">Filé Mignon ao Molho Madeira</h3>
              <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                Suculento filé mignon grelhado, coberto com nosso especial molho madeira e acompanhado de batatas
                rústicas.
              </p>
              <p
                className="font-bold"
                style={{
                  color: colors["--primary-color"] || "#44322a",
                }}
              >
                R$ 59,90
              </p>
            </div>

            {/* Produto 2 */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden mb-2">
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Salmão Grelhado"
                  width={250}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-medium">Salmão Grelhado</h3>
              <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                Salmão fresco grelhado com ervas finas, servido com risoto de limão siciliano e aspargos.
              </p>
              <p
                className="font-bold"
                style={{
                  color: colors["--primary-color"] || "#44322a",
                }}
              >
                R$ 68,00
              </p>
            </div>

            {/* Produto 3 */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden mb-2">
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Frango à Parmegiana"
                  width={250}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-medium">Frango à Parmegiana</h3>
              <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                Peito de frango empanado, coberto com molho de tomate caseiro, queijo gratinado e acompanhado de
                fettuccine.
              </p>
              <p
                className="font-bold"
                style={{
                  color: colors["--primary-color"] || "#44322a",
                }}
              >
                R$ 48,90
              </p>
            </div>

            {/* Produto 4 */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden mb-2">
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Risoto de Funghi"
                  width={250}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-medium">Risoto de Funghi</h3>
              <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                Cremoso risoto italiano preparado com mix de cogumelos frescos, finalizado com parmesão e azeite
                trufado.
              </p>
              <p
                className="font-bold"
                style={{
                  color: colors["--primary-color"] || "#44322a",
                }}
              >
                R$ 52,00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div
        className="p-4 flex justify-between items-center"
        style={{
          backgroundColor: colors["--primary-color"] || "#44322a",
          color: "#ffffff",
        }}
      >
        <div className="flex items-center">
          <ChevronUp className="h-5 w-5 mr-2" />
          <span>Meu pedido</span>
          <span className="ml-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full">0 itens</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-4 opacity-75">Abandonar pedido</span>
          <button
            className="px-4 py-1 rounded font-medium"
            style={{
              backgroundColor: "#ffffff",
              color: colors["--primary-color"] || "#44322a",
            }}
          >
            Confirmar
          </button>
          <span className="ml-2 font-bold">R$ 0,00</span>
        </div>
      </div>
    </div>
  )
})
RestaurantPreview.displayName = "RestaurantPreview"

export default function CssCustomizer() {
  const [fileName, setFileName] = useState("tema-personalizado.css")
  const [colorValues, setColorValues] = useState<Record<string, string>>({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [copied, setCopied] = useState(false)

  // Inicializa os valores padrão
  useEffect(() => {
    const initialValues: Record<string, string> = {}
    variableDefinitions.forEach((variable) => {
      initialValues[variable.name] = variable.defaultValue
    })
    setColorValues(initialValues)
  }, []) // Empty dependency array ensures this only runs once

  // Verifica se todos os campos obrigatórios estão preenchidos
  useEffect(() => {
    const allFieldsFilled = variableDefinitions.every(
      (variable) => colorValues[variable.name] && colorValues[variable.name].trim() !== "",
    )
    setIsFormValid(allFieldsFilled && fileName.trim() !== "")
  }, [colorValues, fileName])

  // Atualiza o valor de uma cor
  const handleColorChange = useCallback((variableName: string, value: string) => {
    setColorValues((prev) => {
      // Só atualiza se o valor for diferente
      if (prev[variableName] === value) {
        return prev
      }
      return {
        ...prev,
        [variableName]: value,
      }
    })
  }, [])

  // Gera o CSS modificado
  const generateModifiedCss = useCallback(() => {
    let modifiedCss = originalCss

    // Substitui cada variável pelo valor personalizado
    Object.entries(colorValues).forEach(([variableName, value]) => {
      // Encontra a linha com a variável e substitui apenas o valor hexadecimal
      const regex = new RegExp(`(${variableName}:\\s*)#[0-9a-fA-F]{3,6}(;\\s*/\\*.*\\*/|;)`)
      modifiedCss = modifiedCss.replace(regex, `$1${value}$2`)
    })

    return modifiedCss
  }, [colorValues])

  // Faz o download do arquivo CSS modificado
  const handleDownload = useCallback(() => {
    const modifiedCss = generateModifiedCss()
    const blob = new Blob([modifiedCss], { type: "text/css" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()

    // Limpa o objeto URL
    setTimeout(() => {
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 100)
  }, [fileName, generateModifiedCss])

  // Copia o CSS para a área de transferência
  const handleCopyCSS = useCallback(() => {
    const modifiedCss = generateModifiedCss()
    navigator.clipboard.writeText(modifiedCss)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generateModifiedCss])

  // Manipulador de eventos para o input de cor
  const handleColorInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, variableName: string) => {
      if (event && event.target) {
        handleColorChange(variableName, event.target.value)
      }
    },
    [handleColorChange],
  )

  // Manipulador de eventos para o input de texto
  const handleTextInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, variableName: string) => {
      if (event && event.target) {
        handleColorChange(variableName, event.target.value)
      }
    },
    [handleColorChange],
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white p-0 m-0 w-full max-w-[100vw]">
      <div className="w-full m-0 p-0">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Gerador de CSS Personalizado</h1>
              <p className="text-teal-100 mt-2">
                Personalize as cores do seu tema e gere um arquivo CSS pronto para uso
              </p>
            </div>
            <Badge className="bg-white/20 text-white border-0 px-3 py-1">v1.0</Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-700">
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z" />
                    </svg>
                  </span>
                  Personalização de Cores
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <Label htmlFor="fileName" className="block mb-2 font-medium text-gray-300">
                    Nome do arquivo CSS
                  </Label>
                  <Input
                    id="fileName"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="tema-personalizado.css"
                    className="w-full bg-gray-700 border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <Separator className="my-6 bg-gray-700" />

                {variableDefinitions.map((variable) => (
                  <div key={variable.name} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <Label htmlFor={variable.name} className="font-medium text-gray-300">
                        {variable.label}
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} className="text-gray-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-900 text-white border-gray-700">
                            <p className="w-80">{variable.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="relative">
                        <Input
                          type="color"
                          id={`color-${variable.name}`}
                          value={colorValues[variable.name] || variable.defaultValue}
                          onChange={(e) => handleColorInputChange(e, variable.name)}
                          className="w-16 h-10 p-1 cursor-pointer border-2 border-gray-600 rounded-md"
                        />
                      </div>
                      <Input
                        type="text"
                        id={`text-${variable.name}`}
                        value={colorValues[variable.name] || variable.defaultValue}
                        onChange={(e) => handleTextInputChange(e, variable.name)}
                        className="flex-1 bg-gray-700 border-gray-600 text-white"
                        placeholder={variable.defaultValue}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8 flex gap-4">
                  <Button
                    onClick={handleDownload}
                    disabled={!isFormValid}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                    size="lg"
                  >
                    <Download className="mr-2 h-4 w-4" /> Gerar arquivo CSS
                  </Button>
                  <Button
                    onClick={handleCopyCSS}
                    disabled={!isFormValid}
                    className="bg-gray-700 hover:bg-gray-600 text-white"
                    size="lg"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gray-800 shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-700">
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white">
                      <Eye className="h-4 w-4" />
                    </span>
                    Prévia em tempo real
                  </CardTitle>
                  <CardDescription className="text-gray-400">Visualize como as cores serão aplicadas</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <RestaurantPreview colors={colorValues} />
                </CardContent>
              </Card>

              <Alert className="bg-gray-800 border border-teal-900 text-white">
                <AlertCircle className="h-4 w-4 text-teal-400" />
                <AlertDescription className="text-gray-300">
                  Todas as alterações são visualizadas em tempo real antes de gerar o arquivo.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>

        {/* Rodapé com créditos atualizados */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-4 text-center text-sm text-white">
          Desenvolvido por Carlos Oldenburg e Wendell Alves
        </div>
      </div>
    </div>
  )
}
