import { headerStyles } from "@/styles/header.styles";
import { LightbulbIcon, TrashIcon } from "@/styles/icons";

interface HeaderProps {
  onClear: () => void;
  messageCount: number;
}

export default function Header({ onClear, messageCount }: HeaderProps) {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.logoSection}>
          <div className={headerStyles.logoIcon}>
            <LightbulbIcon className={headerStyles.logoIconSvg} />
          </div>
          <div>
            <h1 className={headerStyles.logoText.title}>
              Hakim LLM
            </h1>
            <p className={headerStyles.logoText.subtitle}>
              AI Assistant
            </p>
          </div>
        </div>
        
        {messageCount > 0 && (
          <button
            onClick={onClear}
            className={`${headerStyles.clearButton.base} ${headerStyles.clearButton.variant}`}
          >
            <TrashIcon className={headerStyles.clearButtonIcon} />
            <span className={headerStyles.clearButtonText}>Clear Chat</span>
          </button>
        )}
      </div>
    </header>
  );
}

